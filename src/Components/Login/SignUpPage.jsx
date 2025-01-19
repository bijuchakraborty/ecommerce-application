import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS_BASE_URL } from "../../assets/AllApi";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!email || !username || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch(`${PRODUCTS_BASE_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                    name: {
                        firstname: "User",
                        lastname: "Test",
                    },
                    address: {
                        city: "Unknown",
                        street: "Unknown",
                        number: 1,
                        zipcode: "00000",
                        geolocation: {
                            lat: "0",
                            long: "0",
                        },
                    },
                    phone: "000-000-0000",
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setError("");
                console.log("User created successfully!");
                navigate("/");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Sign-up failed. Try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1557683304-673a23048d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2NXwwfDF8c2VhcmNofDJ8fGNvbG9yZnVsJTIwY2hhcml0eXxlbnwwfHx8fDE2MjkzNDk3Mzk&ixlib=rb-1.2.1&q=80&w=1080"
                        alt="Sign Up"
                        className="object-cover h-auto w-full"
                    />
                </div>
                <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-800 text-center">
                        Create an Account
                    </h2>
                    <p className="text-gray-600 text-center mt-2 mb-8">
                        Join us to start your journey.
                    </p>

                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">Account created successfully!</p>}

                    <form onSubmit={handleSignUp} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Choose a username"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to={"/login"}
                                className="text-indigo-500 font-medium hover:underline"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;