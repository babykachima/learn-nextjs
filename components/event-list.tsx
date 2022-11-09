import React from 'react';
import { IEvent } from '../src/type/interface';
import EvenDetailComponent from './event-item';

interface IListEventComponentProps {
	data: Array<IEvent>;
}

const ListEventComponent: React.FC<IListEventComponentProps> = ({ data }) => {
	return (
		<div>
			{data &&
				data.map((item) => (
					<div key={item.id}>
						<EvenDetailComponent item={item} />
					</div>
				))}
		</div>
	);
};

export default ListEventComponent;
