import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

export const PrivateRouter = ({ children }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();

	if (user) {
		return children;
	} else {
		return (
			<Navigate to={"/Login"} state={{ from: location }} replace ></Navigate>
		);
	}
};
