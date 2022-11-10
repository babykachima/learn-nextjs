import classes from './event-logistics.module.css';

interface IProps {
	date: string;
	address: string;
	image: string;
	imageAlt: string;
}

const EventLogistics = ({ date, address, image, imageAlt }: IProps) => {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<img src={image} alt={imageAlt} />
			</div>
			<ul className={classes.list}>
				<time>{humanReadableDate}</time>
				<address>{address}</address>
			</ul>
		</section>
	);
};

export default EventLogistics;
