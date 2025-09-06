import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">
        {/* Logo */}
        <img
          src="/logo512.png"
          alt="ReactJs logo"
          className="mx-auto mb-4 w-16 h-16"
        />

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome to React Chat
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Sign in with Google to chat with your fellow React developers.
        </p>

        {/* Google Sign-In */}
        <button
          onClick={googleSignIn}
          type="button"
          className="mx-auto block"
        >
          <img
            src={GoogleSignin}
            alt="sign in with google"
            className="h-12"
          />
        </button>
      </div>
    </main>
  );
};

export default Welcome;
