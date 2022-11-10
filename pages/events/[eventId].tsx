import { useRouter } from 'next/router';
import React, { Fragment, useMemo } from 'react';
import { getDataById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetailPage = () => {
	const router = useRouter();
	const eventId = Number(router.query.eventId);
	const events = useMemo(() => {
		if (eventId) {
			return getDataById(eventId);
		}
	}, [eventId]);

	if (!events) {
		return (
			<div>
				<p>Not found event</p>
			</div>
		);
	}
	return (
		<Fragment>
			<EventSummary title={events.title} />
			<EventLogistics
				date={events.date}
				image={events.image}
				imageAlt={events.title}
				address={events.location}
			/>
			<EventContent>
				<p>{events.description}</p>
			</EventContent>
		</Fragment>
	);
};

export default EventDetailPage;
