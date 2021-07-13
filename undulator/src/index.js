import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router
} from "react-router-dom";
import RouterSwitch from './router-switch';
import Footer from './footer';
import Navbar from './navbar/navbar';
import ShareSection from './share-section/share-section';
import LinksColumn from './links-column/links-column';
import BannerImage from './banner-image/banner-image.js';

const Front = () => {
	const events = [{ name: 'AU' }, { name: 'A100' }];
	const [currentEvent, setCurrentEvent] = useState(events[0]);
	const otherEvent = events.find(e => e.name !== currentEvent.name);

	const switchEvent = (currentEventFrom) => {
		// set current event to the one which is not currently set
		setCurrentEvent(events.find(e => e.name !== currentEventFrom));
	}

	return (
		<Router>
			<div id='wrap'>
				<header>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<BannerImage currentEvent={currentEvent} />
							</div>
						</div>
					</div>
				</header>

				<Navbar otherEvent={otherEvent} currentEvent={currentEvent} switchEvent={switchEvent} />

				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-2 text-center">
							<LinksColumn currentEvent={currentEvent} switchEvent={switchEvent} />
						</div>

						<div id="main" className="maincontent col-xs-12 col-md-9">
							<RouterSwitch />
						</div>

						<div className="col-xs-12 col-md-1 share-icon-col text-center">
							<ShareSection />
						</div>
					</div>
				</div>

			</div>
			<Footer />
		</Router>);
}
	;

// ========================================

ReactDOM.render(
	<Front />,
	document.getElementById('root')
);
