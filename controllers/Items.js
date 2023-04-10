const Item = require('../models/ItmeModel.js');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// uploads 폴더 없으면 생성
fs.readdir('public', (error) => {
    if (error) {
        fs.mkdirSync('public');
    }
    fs.readdir('public/uploads', (error) => {
        if (error) {
            fs.mkdirSync('public/uploads');
        }
    });
});

// 품목 리스트
exports.getItem = async function (req, res) {
    try {
        const items = await Item.findAll({
            attributes: ['id', 'product_cd', 'product_nm', 'product_g', 'specification', 'purchase_p', 'sales_p', 'product_c', 'inventory_m', 'sales_p_g', 'production_p', 'image', 'label'],
        });
        const itemList = items.map(item => ({
            id: item.id,
            product_cd: item.product_cd,
            product_nm: item.product_nm,
            product_g: item.product_g,
            specification: item.specification,
            purchase_p: item.purchase_p,
            sales_p: item.sales_p,
            product_c: item.product_c,
            inventory_m: item.inventory_m,
            sales_p_g: item.sales_p_g,
            production_p: item.production_p,
            image: item.image
        }));
        res.json(itemList);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

exports.registerItem = async function (req, res) {
    // multer 설정
    const upload = multer({
        storage: multer.diskStorage({
            destination(req, file, cb) {
                cb(null, 'public/uploads'); // public 폴더 아래의 uploads 폴더에 저장합니다.
            },
            filename(req, file, cb) {
                // 한글 파일명 깨짐 해결
      file.originalname = Buffer.from(file.originalname, "latin1").toString(
        "utf8"
      );
                const ext = path.extname(file.originalname);
                const filename = path.basename(file.originalname, ext) + Date.now() + ext;
                cb(null, filename);

                // 업로드한 파일의 경로를 반환합니다.
                req.filepath = `uploads/${filename}`;
            },
        }),
        limits: { fileSize: 5 * 1024 * 1024 },
    }).single('file'); // single 메서드를 사용하여 하나의 이미지를 업로드할 수 있도록 설정합니다.


    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ msg: "Error occurred during image upload" });
        }
        const { product_cd, product_nm, product_g, specification, purchase_p, sales_p, product_c, inventory_m, sales_p_g, production_p, label } = req.body;

        try {
            const imagePath = req.filepath; // 이미지 파일 경로를 변수에 저장합니다.
            await Item.create({
                product_cd: product_cd,
                product_nm: product_nm,
                product_g: product_g,
                specification: specification,
                purchase_p: purchase_p,
                sales_p: sales_p,
                product_c: product_c,
                inventory_m: inventory_m,
                sales_p_g: sales_p_g,
                production_p: production_p,
                // image: req.file ? req.file.path : null, // 이미지 파일 경로가 있으면 저장합니다.
                // image: req.file ? req.file.filename : null, // 이미지 파일명이 있으면 저장합니다.
                // image: imagePath, // 이미지 파일 경로를 전달합니다.
                // image: req.file ? `/uploads/${req.file.filename}` : null, // public 폴더 아래의 상대 경로를 사용합니다.
                image: req.file ? `uploads/${req.file.filename}` : null, // public 폴더 아래의 상대 경로를 사용합니다.
                label: label,
            });
            res.json({ msg: "Registration Successful" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Internal server error" });
        }
    });
};