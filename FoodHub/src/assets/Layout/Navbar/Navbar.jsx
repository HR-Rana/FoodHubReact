import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from './../../../Pages/Provider/AuthProvider';

export default function Navbar() {
	const auth = getAuth();
	const Navigate = useNavigate();
	const {user} = useContext(AuthContext);


	// Handle Google Signout
	function HandleGoodleSignout() {
		signOut(auth)
			.then(() => {
				Navigate("/");
			})
			.catch((error) => {
				alert(error.code);
			});
	}



	return (
		<div className="navigation-bar justify-between py-2 px-3 bg-slate-500 flex items-center">
			<div className="logo-site w-[20%]">
				<Link className="w-[10%] " to="/">
					<img src={logo} alt="logo" />
				</Link>
			</div>
			<div className="nav-site w-[80%] flex justify-end ">
				<div className="flex justify-between w-[70%]">
					<nav className="w-[60%] text-white ">
						<ul className="flex justify-between h-[100%] items-center ">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/About">About</Link>
							</li>
							<li>
								<Link to="/Product">Product</Link>
							</li>
							<li>
								<Link to="/Contact">Contact</Link>
							</li>
						</ul>
					</nav>
					<div className="user flex justify-between w-[30%]">
						<Link to={"/Product_Cart"}>
							<li className="list-none flex h-full mx-2 text-white items-center ">Cart</li>
						</Link>
						{!user ? (
							<div className="flex">
								<div className="login">
									<Link to="/Login">
										<button className="px-4">Login</button>
									</Link>
								</div>
								<div className="regestritation">
									<Link to="/Registration">
										<button className="px-4">Registration</button>
									</Link>
								</div>
							</div>
						) : (
							<div className="flex justify-between w-[90%]">
								<div className="regestritation">
									<button onClick={HandleGoodleSignout}>Sign Out</button>
								</div>
								<div className="login">
									<img src={user?.photoURL} alt="img" className="w-[50px] rounded-full cursor-pointer" />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
