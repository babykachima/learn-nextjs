import React from 'react';
import classes from './event-content.module.css';

interface IProps {
	children: JSX.Element;
}

const EventContent = ({ children }: IProps) => {
	return <div className={classes.content}>{children}</div>;
};

export default EventContent;
