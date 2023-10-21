import React, { useContext, useState } from "react";
import { Chef } from "../../assets/ChefData/ChefData";
import { Link } from "react-router-dom";


export default function About() {
	const [Chefs, setChefs] = useState(Chef);
	const [viewDetails, setViewDetails] = useState("");

	function UpdateChefs() {
		// const result = {...Chefs};
    setViewDetails({...Chefs}, true)
	}

	return (
		<div className="text-center">
			<h1 className="uppercase font-[600] text-3xl my-3">Our Chefs</h1>
			<h3>Name:{''}</h3>
			<div className="Our-Chefs">
				<div className=" grid grid-cols-2 ">
					{Chefs.map((data) => {
						const { id, Name, body, exp, recepie, img } = data;
						return (
							<div
								className="shadow-lg w-[95%]  p-5 my-5 mx-auto justify-center"
								key={id}
							>
								<div className="img my-3">
									<img
										src={img}
										alt="Chef"
										className="h-[250px] border-b-2  object-contain w-[100%] mx-auto"
									/>
								</div>
								<div className="chef-detail-body  w-[90%] mx-auto ">
									<h4 className="text-xl font-[500] text-green-700">
										Name Is: <span className="text-red-600">{Name}</span>
									</h4>
									<p className="font-[500] my-1">
										Experienced: <span className="text-red-600">{exp}</span>
									</p>
									<p className="font-[500] my-1">
										Recepie: <span className="text-red-600">{recepie}</span>
									</p>
									<p className="text-md font-[500]  text-left my-2 w-[90%] mx-auto">
										{body}
									</p>
								</div>

								<Link to={`/Chef_details/${id}`} className="">
									<button className="my-5 px-3" onClick={() => UpdateChefs(id)}>
										View Chef Details
									</button>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
