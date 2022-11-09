import React from 'react';
import { IEvent } from '../../src/type/interface';
import classes from './event-item.module.css';

interface IItemProps {
	item: IEvent;
}

const EventItem: React.FC<IItemProps> = ({ item }) => {
	const { id, title, description, date, isFeatured, image } = item;
	return (
		<div className={classes.container}>
			<div>
				<img src={image} alt={title} width={100} height={100} />
			</div>
			<div>
				<p>{title}</p>
				<p>{description}</p>
				<p>{date}</p>
			</div>
		</div>
	);
};

export default EventItem;
