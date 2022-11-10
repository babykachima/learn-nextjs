import React, { Fragment } from 'react';
import Header from '../components/header/header';

interface IPropsLayout {
	children: JSX.Element;
}

const Layout: React.FC<IPropsLayout> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
		</Fragment>
	);
};

export default Layout;
