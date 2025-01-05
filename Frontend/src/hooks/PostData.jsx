export default async function PostData(uri, data) {
	try {
		const response = await fetch(`/api/${uri}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			credentials: "include",
		})
		console.log(response)
		if (!response.ok) {
			throw new Error( "Post Request Went Wrong")
		}

		return response.json()
	}
	catch (error) {
		throw error;
	}

}
