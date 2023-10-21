import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	
	const auth = getAuth();

	// Create User function
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// user manage
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			return null;
		}
	});

	// signin handler

	function SignInhandler(email, password) {
	 return (	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
				console.log(error.message)
			}));
	}

	const authInfo = {
		user,
		setUser,
		createUser,
		SignInhandler,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
