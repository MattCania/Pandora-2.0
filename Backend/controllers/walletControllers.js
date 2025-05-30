const userWallet = require("../models/userwallet")

const fetchWallet = async (req, res) => {

	const { userId } = req.body

	try {
		
		const getWallet = await userWallet.findOne({where: {
			user_id: userId
		}})

		if (!getWallet) throw new Error('Error Fetching Wallet!')

		res.status(200).json({message: 'Successfully Fetched User Wallet', data: getWallet})
	} catch (error) {
		res.status(500).json({error: error.message})
	}
}


module.exports = {
	fetchWallet,
}