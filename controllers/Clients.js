const Client = require("../models/ClientModel.js");

// 거래처 리스트
exports.getClients = async(req, res) => {
    try {
        const client = await Client.findAll({
            attributes:['id','client_cd', 'client_nm', 'Classification', 'ceo', 'event', 'company_nb','fax','searchContents','mobile','address','address2','homePage','manager', 'email', 'accountGroup', 'accountGroup2', 'accountLayerGroup', 'transferInfo', 'useStatus']
        });
        res.json(client);
    } catch (error) {
        console.log(error);
    }
}

exports.registerClient = async(req, res) => {
    const { client_cd, client_nm, Classification, ceo, event, company_nb, fax, searchContents, mobile, address, address2, homePage, manager, email, accountGroup, accountGroup2, accountLayerGroup } = req.body;
    
    try {
        await Client.create({
            client_cd: client_cd,
            client_nm: client_nm,
            Classification: Classification,
            ceo: ceo,
            event: event,
            company_nb: company_nb,
            fax: fax,
            searchContents: searchContents,
            mobile: mobile,
            address: address,
            address2: address2,
            homePage: homePage,
            manager: manager,
            email: email,
            accountGroup: accountGroup,
            accountGroup2: accountGroup2,
            accountLayerGroup: accountLayerGroup,
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}