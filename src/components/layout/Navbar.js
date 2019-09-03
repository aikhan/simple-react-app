import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				{<i className='fas fa-money-check-alt' />}
				&nbsp;
				{props.title}
			</h1>
		</nav>
	);
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired
};
export default Navbar;
