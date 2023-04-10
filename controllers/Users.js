const Users = require('../models/UserModel.js');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// 취약점및 보완점 패치 완료(2023.02.20)

// 사용자 정보 반환
exports.getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email', 'phone']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

// 사용자 등록
exports.registerUser = async (req, res) => {
    const { name, email, password, confPassword, phone } = req.body;

    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });

    try {
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            phone: phone
        });
        res.json({ msg: "Registration Successful", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

// 로그인
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 유효한 사용자인지 확인하는 로직
        const user = await Users.findOne({
            where: {
                email: email
            }
        });
        if (!user) return res.status(401).json({ msg: "이메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요." });

        // 비밀번호가 일치하는지 확인하는 로직
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ msg: "이메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요." });

        const { id, name, email: userEmail } = user;

        // 새로운 액세스 토큰 발급
        const accessToken = jwt.sign({ userId: id, name, email: userEmail }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "70s",
        });

        const refreshToken = jwt.sign({ userId: id, name, email: userEmail }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d",
        });

        // 이전 세션 무효화
        user.session_id = crypto.randomBytes(20).toString('hex');
        await user.save();

        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id
            }
        });
        
        // 리프레시 토큰 쿠키 설정
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ access_token: accessToken });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Error" });
    }
}

// 로그아웃
exports.Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(200);
    const user = await Users.findOne({
        where: {
            refresh_token: refreshToken
        }
    });

    if (!user) return res.sendStatus(200);
    await Users.update({ refresh_token: null }, {
        where: {
            id: user.id
        }
    });
    res.clearCookie('refreshToken');
    res.status(200).send('Logged out successfully');
}