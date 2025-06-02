import { userAccounts, userProfiles, userWallets } from '../models'

const fetchProfile = async (req, res) => {

	const userId = req.body

	try {
		
	} catch (error) {
		res.status(500).json({error: error.message})
	}

}
