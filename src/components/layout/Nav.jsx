import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";

function Nav() {
	return (
		<Navbar className="bg-primary">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Login example
				</Link>
			</div>
			<div className="flex-none">
				<Menu horizontal={true} className="px-1">
					<Menu.Item>
						<NavLink to="/" as={Dropdown.Item}>
							Login
						</NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink to="/register">Register</NavLink>
					</Menu.Item>
					<LogoutButton />
				</Menu>
			</div>
		</Navbar>
	);
}

export default Nav;
