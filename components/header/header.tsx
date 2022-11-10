import Link from 'next/link';
import React from 'react';
import classes from './header.module.css';

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href={'/'}>Events NextJS</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<Link href={'/events'}>Browser All Event</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
