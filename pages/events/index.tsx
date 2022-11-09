import React from 'react';
import ListEventComponent from '../../components/event-list';
import { getData } from '../../dummy-data';

const ListEventPage = () => {
	const data = getData();
	return (
		<div>
			<ListEventComponent data={data} />
		</div>
	);
};

export default ListEventPage;
