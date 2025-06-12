//const api_url='https://blogspotapibackend-2.onrender.com/api';
const api_url="https://localhost:7018/api"

const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const loginUser = async (credentials) => {
    console.log("Sending login request with credentials:", credentials); // Log credentials
  
    try {
      const response = await fetch(`${api_url}/Auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      console.log("Response status:", response.status); // Log response status
  
      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }
  
      const data = await response.json();  // Parse the JSON response
      console.log("Response data:", data);  
  
      return data; 
    } catch (err) {
      console.error("Error during login:", err);  
      throw err;  
    }
  };
  
  export const registerUser = async (data) => {
    const response = await fetch(`${api_url}/Auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),  // Data should be sent as expected by the backend (username, password, role)
    });
  
    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error("Registration failed...");
    }
  
    // If the response is successful, parse the response body as JSON
    return response.json();
  };
  
  export const fetchUserDetails = async () => {
  const res = await fetch(`${api_url}/Posts/GetUserDetails`, {
    headers: getAuthHeader(),
  });
  if (!res.ok) throw new Error("Failed to fetch user details");
  console.log("usedetails-->",res.json);
  return await res.json();
};