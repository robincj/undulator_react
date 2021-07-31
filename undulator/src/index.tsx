import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route, Redirect
} from "react-router-dom";
import Main from './main-router';
import Footer from './footer';
import Navbar from './navbar/navbar';
import ShareSection from './share-section/share-section';
import LinksColumn from './links-column/links-column';
import BannerImage from './banner-image/banner-image';

export interface EventType { name: string, display_name: string }

export interface CommonProps {
	currentEvent: EventType;
	otherEvent: EventType;
};

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

export const events: EventType[] = [
	{ name: 'AU', display_name: 'Aorangi Undulator' },
	{ name: 'A100', display_name: 'Aorangi Undulator 100' }
];

const EventPage = (props: EventPageProps) => {
	const [currentEvent, setCurrentEvent] = useState(events[0]);

	const switchEvent = () => {
		// set current event to the one which is not currently set
		const newEvent = events.find(e => e.name !== currentEvent.name);
		if (newEvent) {
			setCurrentEvent(newEvent);
		}
		else console.error(`Cannot find event ${newEvent}`)
	}

	if (currentEvent.name !== props.currentEventName) {
		switchEvent();
	}
	const otherEvent = events.find(e => e.name !== currentEvent.name) || events[1];

	console.log("EventPage", currentEvent);
	return <>
		<header>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<BannerImage currentEvent={currentEvent} />
					</div>
				</div>
			</div>
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