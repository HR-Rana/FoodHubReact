import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {
	// Handle Google Signout

	const auth = getAuth();
	function HandleGoodleSignout() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
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
						{/* <div className="login">
							<img src={""} alt="" />
						</div>
						<div className="regestritation">
							<button onClick={HandleGoodleSignout}>Sign Out</button>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
