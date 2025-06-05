
const { userAccounts, userProfile, userWallet } = require("../models");

const fetchProfile = async (req, res) => {
	console.log("Start Profile Fetching")
	const { userId } = req.query

	try {
		if (!userId) throw new Error ('User Id Null')
		console.log(userId)
		
		const accountRes = await userAccounts.findOne({where: {user_id: userId}})

		if (!accountRes) {
			throw new Error('Error Fetching Account')
		}

		const profileRes = await userProfile.findOne({where: {user_id: userId}})

		if (!profileRes) {
			throw new Error('Error Fetching Profile')
		}

		const walletRes = await userWallet.findOne({where: {user_id: userId}})

		if (!walletRes) {
			throw new Error('Error Fetching Wallet')
		}

		console.log("Account: ", accountRes)
		console.log("Profile: ", profileRes)
		console.log("Wallet: ", walletRes)

		const email = accountRes.email
		const userName = accountRes.username
		const firstName = profileRes.firstname
		const middleName = profileRes.middleName
		const lastName = profileRes.lastName
		const gender = profileRes.gender
		const birthday = profileRes.birthday
		const age = profileRes.age
		const address = profileRes.address
		const currency = walletRes.currency
		const balance = walletRes.balance
		const incomePeriod = walletRes.incomePeriod
		const incomeAmount = walletRes.incomeAmount

		const data = {
			 email, userName, firstName, middleName, lastName,
			 gender, birthday, age, address, currency,
			 balance, incomeAmount, incomePeriod
		}

		res.status(200).json({message: "Successful Fetching", data: data})


	} catch (error) {
		console.log(error.message)
		res.status(500).json({error: error.message})
	}
}

const editProfile = async () => {

	const { 
		firstName, middleName, lastName, birthday, address, currency, balance, incomeAmount, incomePeriod
	 } = req.body


	 try {
		
		const updateRes = userProfile.update({where: {userId}})

	 } catch (error) {
		console.error(error)
		res.status(500).json({error: error.message})
	 }

}

module.exports = {
	fetchProfile,
}