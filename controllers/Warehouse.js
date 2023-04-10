const Warehouse = require("../models/WarehouseModel.js");

// 창고 정보 가져오기 API
exports.getWarehouses = async (req, res) => {
  try {
    const warehouse = await Warehouse.findAll({
      attributes: [
        "id",
        "warehouse_cd",
        "warehouse_nm",
        "itemClassification",
        "sales_tax",
        "purchase_tax",
        "salesPriceGroup",
        "purchasePriceGroup",
        "warehouseLayerGroup",
        "useStatus",
        "process_nm",
        "outsourcingCustomer_nm",
      ],
    });
    res.json(warehouse);
  } catch (error) {
    console.log(error);
  }
};

exports.registerWarehouse = async (req, res) => {
  const {
    warehouse_cd,
    warehouse_nm,
    itemClassification,
    sales_tax,
    purchase_tax,
    salesPriceGroup,
    purchasePriceGroup,
    warehouseLayerGroup,
    useStatus,
    process_nm,
    outsourcingCustomer_nm,
  } = req.body;

  try {
    await Warehouse.create({
      warehouse_cd: warehouse_cd,
      warehouse_nm: warehouse_nm,
      itemClassification: itemClassification,
      sales_tax: sales_tax,
      purchase_tax: purchase_tax,
      salesPriceGroup: salesPriceGroup,
      purchasePriceGroup: purchasePriceGroup,
      warehouseLayerGroup: warehouseLayerGroup,
      useStatus: useStatus,
      process_nm: process_nm,
      outsourcingCustomer_nm: outsourcingCustomer_nm,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};