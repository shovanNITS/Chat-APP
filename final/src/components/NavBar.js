import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="sticky top-0 z-10 bg-white shadow flex items-center justify-between px-6 py-3">
      {/* App Title */}
      <h1 className="text-lg font-semibold text-gray-800">React Chat</h1>

      {/* Auth Buttons */}
      {user ? (
        <button
          onClick={signOut}
          className="px-4 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      ) : (
        <button onClick={googleSignIn} type="button">
          <img
            src={GoogleSignin}
            alt="sign in with google"
            className="h-10"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
