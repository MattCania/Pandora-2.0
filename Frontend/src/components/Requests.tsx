import axios from "axios";

async function HTTPRequest(method: string, uri: string, data: any) {
  method = method.toLowerCase();
  try {
    const { data: tokenData } = await axios.get("/api/csurf-token");
    if (!tokenData) throw new Error("Failed to fetch CSRF token");
    const token = tokenData.csrfToken;
    var response: any;
    switch (method) {
      case "post":
        response = await axios.post(`/api/${uri}`, data, {
          headers: { "X-CSRF-Token": token },
        });
        break;
      case "get":
        response = await axios.get(`/api/${uri}`, {
          params: data,
        });
        break;
      case "put":
        response = await axios.put(`/api/${uri}`, data, {
          headers: {
            "X-CSRF-Token": token,
          },
        });
        break;
      case "delete":
        response = await axios.delete(`/api/${uri}`, {
          data: data,
          headers: {
            "X-CSRF-Token": token,
          },
        });
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    console.log("Axios Response: ", response);
    return response;
  } catch (error) {
    return error;
  }
}

export default HTTPRequest;
