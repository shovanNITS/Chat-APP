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
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full text-center">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo512.png"
            alt="ReactJs logo"
            className="w-20 h-20 mb-4 animate-spin-slow"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to <span className="text-blue-600">React Chat</span>
          </h1>
          <p className="text-gray-600 text-sm">
            Connect, share, and chat in real-time with React developers around
            the world.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 my-6 text-sm text-gray-700">
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-xl mb-1">⚡</span>
            <p>Fast & Live</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-xl mb-1">🔒</span>
            <p>Secure</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-xl mb-1">🌍</span>
            <p>Global</p>
          </div>
        </div>

        {/* Google Sign-In */}
        <button
          onClick={googleSignIn}
          type="button"
          className="mx-auto block hover:scale-105 transform transition"
        >
          <img
            src={GoogleSignin}
            alt="sign in with google"
            className="h-12"
          />
        </button>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-6">
          Powered by Firebase & React ⚛️
        </p>
      </div>
    </main>
  );
};

export default Welcome;
