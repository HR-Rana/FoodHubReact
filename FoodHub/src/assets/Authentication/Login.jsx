import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from './../../Pages/Provider/AuthProvider';

export default function Login() {
	const {SignInHandler} = useContext(AuthContext);
	const auth = getAuth();
	const history = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");


	// login Handler

	function LoginHander(e){
		e.preventDefault();


		if (email == null || password == null) {
			setErr("Please Fill up the Form")
		}else{
			SignInHandler(email, password)	
		
		}
	
	
	}



	const provider = new GoogleAuthProvider();
	function HandleGoogleLogin(e) {
		e.preventDefault();

		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user)
			})
			.catch((error) => {
				console.log(error.code);
				console.log("getting error");
			});
	}
	return (
		<div className="login-page my-[50px]">
			<div className="">
				<div className="auth-area text-center">
					<h3 className="text-2xl my-3">Login Here....!</h3>
					<div className="w-[60%] mx-auto justify-center  shadow-lg px-[15px] py-[45px] my-6">
						<form
							action=""
							className="flex flex-col text-left justify-center w-[50%] mx-auto"
						>
							<label htmlFor="email">Write Your Email</label>
							<input type="email" id="email" placeholder="Your Email" />
							<label htmlFor="password" placeholder="Enter Your Password">
								Password
							</label>
							<input
								type="password"
								name="password"
								placeholder="Your Password.."
								id="password"
							/>{" "}
							<input type="submit" value="Submit" onClick={LoginHander} />
							<div className="forgot-password-div flex justify-between w-[100%]">
								<p>
									<Link
										to="/Login"
										className="text-red-600 underline font-[600]"
									>
										Forgot Password?
									</Link>
								</p>
								<p>
									<Link
										to="/Registration"
										className="text-green-600 font-[600]"
									>
										Didn't any Account?
									</Link>
								</p>
							</div>
							<p className="text-red-500 font-[500]">{err}</p>

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
