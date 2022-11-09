import React from 'react';
import { IEvent } from '../src/type/interface';

interface IItemProps {
	item: IEvent;
}

const EvenDetailComponent: React.FC<IItemProps> = ({ item }) => {
	const { id, title, description, date, isFeatured, image } = item;
	return (
		<div>
			<div>
				<img src={image} alt={title} width={100} height={100} />
			</div>
			<p>{title}</p>
			<p>{description}</p>
			<p>{date}</p>
		</div>
	);
};

export default EvenDetailComponent;
