import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import Navbar from './navbar/navbar';
import ShareSection from './share-section/share-section';
import LinksColumn from './links-column/links-column';
import BannerImage from './banner-image/banner-image.js';
import './main.css';
import './unseen-column.css';

const Front = () => {
	const events = [{name:'AU'}, {name:'A100'}];
	const [ currentEvent, setCurrentEvent ] = useState<string>(events[0]);
	const switchEvent = ()=>{
		// set current event to the one which is not currently set
		setCurrentEvent( events.find(e=>e.name !== currentEvent));
	}

	return (
	<>
	<div id='wrap'>
		<header>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<BannerImage currentEvent/>
					</div>
				</div>
			</div>
		</header>

		<Navbar currentEvent switchEvent/>

		<section>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-2 text-center">
						<LinksColumn currentEvent switchEvent/>				
					</div>

					<div id="main" className="maincontent col-xs-12 col-md-9">
					</div>

					<div className="col-xs-12 col-md-1 share-icon-col text-center">
						<ShareSection/>				
					</div>
				</div>
			</div>
		</section>

			<div id="push"></div>
		</div>
		<Footer/>
	</>);
}
	;

// ========================================

ReactDOM.render(
	<Front />,
	document.getElementById('root')
);
