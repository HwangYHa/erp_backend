// const express = require('express');
// const router = express();

// const UserInfo = require('./models').UserInfo;

// // http://localhost:4000/gursung/erp/login 으로 접속 시 응답메시지 출력
// router.post('/gursung/erp/login', async (req, res) => {
//     const email = req.body.email;
//     const password = req.bpdy.password;

//     try {
//         // email을 조건으로 조회
//         const rearch_result = await userSlice.findOne({ where: { email } });
//         if (rearch_result) {
//             if (rearch_result.password !== password) {
//                 res.json({ resultCode: false, msg: "비밀번호가 틀립니다" });
//             }

//             // 닉네임 조회
//             const nickname_result = await UserInfo.findOne({
//                 where : { id: rearch_result.userinfo_id},
//                 attributes: ['nickname']
//             });

//             // 세션에 id, email, nickname 넣기
//             req.session.email = email;

//             res.json({ resultCode: true, msg: `${email}님 환영합니다!` });
//         } else {
//             res.json({ resultCode: false, msg: "이메일이 존재하지 않습니다" });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

// module.exports = router;