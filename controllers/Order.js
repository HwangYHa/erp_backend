const Order = require("../models/OrderModel.js");

// 창고 정보 가져오기 API
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findAll({
      attributes: [
        "id",
        "orderDate",
        "client",
        "manager",
        "type",
        "deliveyDate",
        "attach",
        "order_cd",
        "order_nm",
        "specification",
        "quantity",
        "price",
        "supplyValue",
        "vat",
      ],
    });
    res.json(order);
  } catch (error) {
    console.log("에러", error);
  }
};


exports.registerOrder = async (req, res) => {
  const { orderDate, client, manager, type, deliveyDate, attach, orderDetails } = req.body;

  try {
    for (const detail of orderDetails) {
      // 유효성 검증 함수를 사용하여 detail의 각 필드가 유효한지 확인
      if (isNotEmpty(detail.order_cd) && isNotEmpty(detail.order_nm) && isNotEmpty(detail.specification) && isNotEmpty(detail.quantity) && isNotEmpty(detail.price)) {
        await Order.create({
          orderDate: orderDate,
          client: client,
          manager: manager,
          type: type,
          deliveyDate: deliveyDate,
          attach: attach,
          ...detail
        });
      }
    }

    res.json({ msg: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register the order." });
  }
};

// 유효성 검증 함수
function isNotEmpty(value) {
  return value !== undefined && value !== null && value.trim().length > 0;
}