import React, { useContext, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase.config";

export default function Regestrition() {
	const history = useNavigate();
	const [RegisterUser, setRegisterUser] = useState({
		is_login: false,
		Name: "",
		email: "",
		Password: "",
	});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [conPass, setconPass] = useState("");
	const [err, setErr] = useState("");
	const auth = getAuth(app);

	// Registration Form Submit Handler

	function HandleRegistrationSubmit(e) {
		e.preventDefault();

		let Validation;
		const emailRegex = /^\S+@\S+\.\S+$/;
		const passRegex = /^(?=.*\d)(?=.*[A-Z])(.{6,20})$/.test(password);

		if (email == "" || name == "" || password == "" || conPass == "") {
			return setErr("Fill up the Form...");
		} else if (name.length < 3) {
			return setErr("Minimum Name Charecter 3");
		} else if (!emailRegex.test(email)) {
			setErr("Your email Formate is not Valided..");
		} else if (!passRegex) {
			return setErr(
				"Password Should be One Capital and minimum 6 Charecter..!"
			);
		} else if (password !== conPass) {
			return setErr("Password doesn't matched..!");
		} else {
			setErr("")
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					console.log(user);
					console.log("user created...")
					// ...
					history("/")
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
					setErr(error.message)
				});
		}
	}

	const provider = new GoogleAuthProvider();
	function HandleGoogleLogin(e) {
		e.preventDefault();

		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user.displayName);
				setRegUser({
					isLogin: true,
					Name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				});
				history("/");
			})
			.catch((error) => {
				console.log(error.code);
				console.log("getting error");
			});
	}

	return (
		<div className="login-page">
			<div className="">
				<div className="auth-area text-center">
					<h3 className="text-2xl my-3">Registration Now....!</h3>
					<div className="w-[60%] mx-auto justify-center shadow-lg p-5 my-6">
						<p className="text-red-500 text-center font-[500]">{err}</p>
						<form
							onSubmit={HandleRegistrationSubmit}
							className="flex flex-col text-left justify-center w-[50%] mx-auto"
						>
							<label htmlFor="name">Write Your Name</label>
							<input
								type="text"
								id="name"
								placeholder="Your Name"
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
							<label htmlFor="email">Write Your Email</label>
							<input
								type="email"
								id="email"
								placeholder="Your Email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<label htmlFor="password" placeholder="Enter Your Password">
								Password
							</label>
							<input
								type="password"
								name="password"
								placeholder="Your Password.."
								id="password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<label htmlFor="confirm">Confirm Password</label>
							<input
								type="password"
								placeholder="Confirm Passowrd"
								onChange={(e) => {
									setconPass(e.target.value);
								}}
							/>{" "}
							<input type="submit" value="Submit" />
							<div className="forgot-password-div flex justify-between w-[100%]">
								<p className="font-[500]">Do you have Account?</p>
								<p>
									<Link
										to="/Login"
										className="text-red-400 underline font-[600]"
									>
										Login Now
									</Link>
								</p>
							</div>
						</form>

						<div className="google-signIn">
							<button onClick={HandleGoogleLogin}>Google SignIN</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
