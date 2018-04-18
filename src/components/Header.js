import React from 'react';

const Header = ()=>	{
	return <nav>
		<div className="nav-wrapper green">
			<a href="/" className="brand-logo">Click Game</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>Click Each Character One Time Only to Win!</li>
				</ul>
		</div>
	</nav>
}	
export default Header;