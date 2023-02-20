import Client from "../models/ClientModel.js";

// 거래처 리스트
export const getClients = async(req, res) => {
    try {
        const client = await Client.findAll({
            attributes:['id','client_cd','client_nm','representative','company_nb','phone','useStatus','transferInfo','Address','businessStatus','event']
        });
        console.log("client",client)
        res.json(client);
        
    } catch (error) {
        console.log('error = = > ',error);
    }
}

export const registerClient = async(req, res) => {
    const { client_cd, client_nm, representative } = req.body;
    
    try {
        await Client.create({
            client_cd: client_cd,
            client_nm: client_nm,
            representative: representative,
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}