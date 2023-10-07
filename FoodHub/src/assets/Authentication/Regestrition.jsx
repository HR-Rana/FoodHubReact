import React from "react";
import { Link } from "react-router-dom";

export default function Regestrition() {
	function HandleGoogleLogin(e) {
		e.preventDefault();

		console.log("google submit is working...");
	}
	return (
		<div className="login-page">
			<div className="fle">
				<div className="auth-area text-center">
					<h3 className="text-2xl my-3">Login Here....!</h3>
					<div className="w-[60%] mx-auto justify-center shadow-lg p-5 my-6">
						<form
							action=""
							onSubmit={""}
							className="flex flex-col text-left justify-center w-[50%] mx-auto"
						>
							<label htmlFor="email">Write Your Name</label>
							<input type="email" id="email" placeholder="Your Name" />
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
							<button onClick={""}>Google SignIN</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
