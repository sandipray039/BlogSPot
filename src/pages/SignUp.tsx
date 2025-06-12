import React, { useState } from "react";
import { registerUser } from "../authapi/authapi";  // Make sure you create this function in authapi.js

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default role set to 'User'
  const [err, setErr] = useState<null | string>(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the signup logic here
    try {
      const response = await registerUser({ username, password, role });
      if (response && response.message) {
        setSuccessMsg(response.message);
        setErr(null); // Clear any previous errors
      } else {
        setErr("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err); // Debugging: log the error
      setErr(err.message); // Set error state if there's an error
    }
  };

  return (
   <div
  className="flex justify-center items-center min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/slbg.jpg')", 
  }}
>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[40vw] bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Role Dropdown */}
          {/* <div>
            <label htmlFor="role" className="block text-gray-700 text-sm font-semibold mb-2">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div> */}

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </div>

          {/* Display Success or Error Messages */}
          {err && (
            <div className="text-red-500 text-2xl mt-2">
              <p>{err}</p>
            </div>
          )}
          {successMsg && (
            <div className="text-green-500 text-sm mt-2">
              <p>{successMsg}</p>
            </div>
          )}

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
