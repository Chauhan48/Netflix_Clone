import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="Netflix Logo" className='absolute' />
            </div>
            <div>
                <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md bg-black/75 p-8 rounded-md text-white">
                    <h1 className="text-3xl font-bold mb-6">
                        {isSignInForm ? "Sign In": "Sign Up"}
                    </h1>
                    {!isSignInForm && <input
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 mb-4 bg-gray-700 rounded text-white placeholder-gray-400"
                    />}
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        className="w-full p-3 mb-4 bg-gray-700 rounded text-white placeholder-gray-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 bg-gray-700 rounded text-white placeholder-gray-400"
                    />
                    <button className="w-full p-3 bg-red-600 hover:bg-red-700 font-semibold rounded mb-4">
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                    </div>

                    <p className="mt-6 text-sm cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered! Sign In'}
                    </p>

                    <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Learn more.
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
