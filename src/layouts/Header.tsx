import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
		<div className="flex items-center justify-between my-12">
			<span className="uppercase font-outfit text-pumpkin-dark font-bold text-lg">
				trick or treat
			</span>
			<div className="flex gap-4 text-pumpkin-dark uppercase py-2 px-4 rounded-lg nav-menu backdrop-blur-md">
				<NavLink to="/">About</NavLink>
				<NavLink to="/">Line Up</NavLink>
				<NavLink to="/">Tickets</NavLink>
				<NavLink to="/">Support</NavLink>
			</div>
		</div>
	);
}
