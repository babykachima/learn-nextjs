import React from 'react';
import { IEvent } from '../../src/type/interface';
import EventItem from '../event-item/event-item';
import classes from './event-list.module.css';

interface IListEventProps {
	data: Array<IEvent>;
}

const EventList: React.FC<IListEventProps> = ({ data }) => {
	return (
		<div className={classes.container}>
			{data &&
				data.map((item) => (
					<div key={item.id}>
						<EventItem item={item} />
					</div>
				))}
		</div>
	);
};

export default EventList;
