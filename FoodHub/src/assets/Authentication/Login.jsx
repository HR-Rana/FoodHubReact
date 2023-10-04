import React from "react";
import { Link } from 'react-router-dom';

export default function Login() {
	function HandleSubmitLogin(e) {
		e.preventDefault();

		console.log("submit Is working....");
	}
	return (
		<div className="login-page">
			<div className="">
				<div className="auth-area text-center">
					<h3 className="text-2xl my-3">Login Here....!</h3>
					<div className="w-[60%] mx-auto justify-center shadow-lg p-5 my-6">
						<form action="" onSubmit={""} className="flex flex-col text-left justify-center w-[50%] mx-auto">
							<label htmlFor="email">Write Your Email</label>
						
							<input type="email" id="email" placeholder="Your Email" />
						
							<label
								htmlFor="password"
								placeholder="Enter Your Password"
							>Password</label>
						
							<input
								type="password"
								name="password" 
								placeholder="Your Password.."
								id="password"
							/>{" "}
						
							<input type="submit" value="Submit" />


              <div className="forgot-password-div flex justify-between w-[100%]">
                  <p><Link to='/Login' className="text-red-600 underline font-[600]">Forgot Password?</Link></p>
                  <p><Link to='/Registration' className="text-green-600 font-[600]">Didn't any Account?</Link></p>
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
