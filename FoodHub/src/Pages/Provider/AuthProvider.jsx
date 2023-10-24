import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);
	let cartArr =[]
	
	const auth = getAuth();
	
	// Create User function
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// user manage
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// signin handler

	function SignInhandler(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(error.message);
			});
	}

	const authInfo = {
		user,
		setUser,
		createUser,
		SignInhandler,
		cart,
		setCart,
		cartArr
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
