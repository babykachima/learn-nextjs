import React from 'react';
import Button from '../../elements/button';

import { IEvent } from '../../src/type/interface';
import classes from './event-item.module.css';

interface IItemProps {
	item: IEvent;
}

const EventItem: React.FC<IItemProps> = ({ item }) => {
	const { id, title, description, date, isFeatured, image } = item;
	const exploreLink = `/events/${id}`;
	return (
		<div className={classes.container}>
			<div>
				<img src={image} alt={title} width={150} height={140} />
			</div>
			<div>
				<div>
					<p>{title}</p>
					<p>{description}</p>
					<p>{date}</p>
				</div>
				<Button link={exploreLink}>Expore Events</Button>
			</div>
		</div>
	);
};

export default EventItem;
