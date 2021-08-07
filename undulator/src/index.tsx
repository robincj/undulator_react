import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route, Redirect
} from "react-router-dom";
import Main from './main-router';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import ShareSection from './share-section/share-section';
import LinksColumn from './links-column/links-column';
import BannerImage from './banner-image/banner-image';

export interface EventType { name: "AU" | 'A100', displayName: string, longName: string }

export interface CommonProps {
	currentEvent: EventType;
	otherEvent: EventType;
};

export const events: EventType[] = [
	{ name: 'AU', displayName: 'Aorangi Undulator', longName: "The 1-day Aorangi Undulator" },
	{ name: 'A100', displayName: 'Aorangi Undulator 100', longName: "The 3-day Aorangi Undulator 100" }
];

export const Front = () => {
	return (
		<Router>
			<Switch>
				<Route path="/au" render={(routerProps) => (<EventPage {...routerProps} currentEventName='AU' />)} />
				<Route path="/a100" render={(routerProps) => (<EventPage {...routerProps} currentEventName='A100' />)} />
				<Redirect to="/au" />
			</Switch>
			<Footer />
		</Router>);
};


interface EventPageProps extends CommonProps {
	currentEventName?: string;
}

export const getEventByName = (name: string): EventType => events.find(e => e.name.toUpperCase() === name.toUpperCase()) || events[0];
export const getOtherEventByName = (name: string): EventType => events.find(e => e.name.toUpperCase() !== name.toUpperCase()) || events[1];

const EventPage = (props: EventPageProps) => {
	const [currentEvent, setCurrentEvent] = useState(events[0]);

	const switchEvent = () => {
		// set current event to the one which is not currently set
		const newEvent = getOtherEventByName(currentEvent.name);
		if (newEvent) {
			setCurrentEvent(newEvent);
		}
		else console.error(`Cannot find event ${newEvent}`)
	}

	if (currentEvent.name !== props.currentEventName) {
		switchEvent();
	}
	const otherEvent = getOtherEventByName(currentEvent.name);

	return <>
		<header>
			<BannerImage currentEvent={currentEvent} />
		</header>

		<Navbar otherEvent={otherEvent} currentEvent={currentEvent} />

		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-md-2 text-center">
					<LinksColumn currentEvent={currentEvent} />
				</div>

				<div id="main" className="maincontent col-xs-12 col-md-9">
					<Main otherEvent={otherEvent} currentEvent={currentEvent} />
				</div>

				<div className="col-xs-12 col-md-1 share-icon-col text-center">
					<ShareSection />
				</div>
			</div>
		</div>
	</>;
};

// ========================================

ReactDOM.render(
	<Front />,
	document.getElementById('root')
);

export default Front;