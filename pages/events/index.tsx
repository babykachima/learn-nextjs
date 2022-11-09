import React from 'react';
import EventList from '../../components/event-list/event-list';
import { getData } from '../../dummy-data';

const ListEventPage = () => {
	const data = getData();
	return (
		<div>
			<EventList data={data} />
		</div>
	);
};

export default ListEventPage;
