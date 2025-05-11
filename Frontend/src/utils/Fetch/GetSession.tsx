import axios from 'axios';

export async function GetSession() {
	try {
		const response = await axios.get('/api/check-session');
		return response.data;
	} catch (error) {
		console.error('Error fetching session:', error);
		return null;
	}
}