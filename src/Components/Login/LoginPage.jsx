import React, { useState } from 'react';
import { PRODUCTS_BASE_URL } from '../../assets/AllApi';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ token, setToken }) => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const userLogin = async (e) => {
        e.preventDefault();
        setError("");
        if (!userName || !password) {
            console.log("Username and password are required");
            return;
        }
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Login failed. Please try again.");
                return;
            }

            const json = await response.json();
            console.log(json)
            if (json && json.token) {
                setToken(json.token);
                console.log("Token:", json.token);
                sessionStorage.setItem("userToken", json.token);
                navigate('/home');
            } else {
                setError("Invalid response from server.");
            }
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2NXwwfDF8c2VhcmNofDV8fHNob3BwaW5nfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Shopping"
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <div className="md:w-1/2 p-6 sm:p-12">
                        <h2 className="text-3xl font-semibold text-gray-800 text-center">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600 text-sm text-center mt-2 mb-8">
                            Log in to continue your shopping journey
                        </p>

                        <form className="space-y-6">
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
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your username"
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

                            {error && <small>{error}</small>}

                            <button
                                type="submit"
                                onClick={userLogin}
                                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
                            >
                                Log In
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link to={'/signup'}
                                    href="/register"
                                    className="text-indigo-500 font-medium hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                            {/* <p className="text-sm text-gray-600 mt-2">
                                Forgot your password?{' '}
                                <a
                                    href="/reset-password"
                                    className="text-indigo-500 font-medium hover:underline"
                                >
                                    Reset Password
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;