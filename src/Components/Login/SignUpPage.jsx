import React, { useState } from "react";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Sign Up:", { email, password, confirmPassword });
    };

    return (
        <>
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
                                <a
                                    href="/login"
                                    className="text-indigo-500 font-medium hover:underline"
                                >
                                    Log In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;