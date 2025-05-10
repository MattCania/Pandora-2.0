async function HTTPRequest(method: string, uri: string, data: any) {
	try {
		const tokenResponse = await fetch("/api/csurf-token");
		if (!tokenResponse.ok) throw new Error("Failed to fetch CSRF token");
		
		const tokenData = await tokenResponse.json()
		const token = tokenData.csrfToken;

		const response = await fetch(`/api/${uri}`, {
			method: method,
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-Token": token
			},
			body: JSON.stringify(data),
			credentials: "include",
		})
		console.log(response)
		if (!response.ok) {
			throw new Error(`${method} Request Went Wrong`)
		}

		return response.json()
	}
	catch (error) {
		throw error;
	}

}

export default HTTPRequest