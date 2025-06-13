import React, { useContext, useState } from "react";
import { loginUser } from "../authapi/authapi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // username/email/phone
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

    const {login}=useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ identifier, password }); // updated field name

      console.log(response); // Debug log

      if (response && response.token) {
        login(response.token);
        navigate("/dashboard");
      } else {
        setErr("Login failed. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setErr(err.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
    backgroundImage: "url('/images/slbg.jpg')", 
  }}
    >
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[40vw] bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Identifier Input */}
          <div>
            <label htmlFor="identifier" className="block text-gray-700 text-sm font-semibold mb-2">
              Username / Email / Phone
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username, email, or phone"
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>

          {/* Error Message */}
          {err && (
            <div className="text-red-500 text-lg mt-2">
              <p>{err}</p>
            </div>
          )}

          {/* Sign Up */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
