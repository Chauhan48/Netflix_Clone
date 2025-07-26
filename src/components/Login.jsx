import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE } from '../utils/constants';

const Login = () => {

    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessages, setErrorMessages] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        // Validate form data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessages(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up logic

            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessages(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessages(errorCode + '-' + errorMessage);
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessages(errorCode + '-' + errorMessage);
                });
        }

    }

    return (
        <div>
            <Header />
            <div>
                <img src={BACKGROUND_IMAGE} alt="Netflix Logo" className='absolute' />
            </div>
            <div>
                <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md bg-black/75 p-8 rounded-md text-white">
                    <h1 className="text-3xl font-bold mb-6">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && <input
                        ref={name}
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 mb-4 bg-gray-700 rounded text-white placeholder-gray-400"
                    />}
                    <input
                        ref={email}
                        type="email"
                        placeholder="Email or phone number"
                        className="w-full p-3 mb-4 bg-gray-700 rounded text-white placeholder-gray-400"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 bg-gray-700 rounded text-white placeholder-gray-400"
                    />
                    <p className='text-red-400 font-bold'>{errorMessages}</p>
                    <button className="w-full p-3 bg-red-600 hover:bg-red-700 font-semibold rounded mb-4" onClick={handleButtonClick}>
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
