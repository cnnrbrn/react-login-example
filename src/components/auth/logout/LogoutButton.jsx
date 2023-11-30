import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../../stores/useUserStore";

console.log(useUserActions);

function LogoutButton() {
	const actions = useUserActions();

	console.log("actions", actions);

	const navigate = useNavigate();

	function handleLogout() {
		// clearUser();
		navigate("/");
	}

	return (
		<Button tag="a" onClick={handleLogout}>
			Logout
		</Button>
	);
}

export default LogoutButton;
