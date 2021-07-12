import React from 'react';
import {
  Link
} from "react-router-dom";
// import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

// Brand and toggle get grouped for better mobile display
const MenuBarHeader = () => <>
	<Navbar.Brand href="#home">
	<img
	src="/images/logos/aorangi_undulator_icon.jpg"
	width="30"
	height="30"
	className="d-inline-block align-top"
	alt="Aorangi Undulator logo"
	/>
	</Navbar.Brand>
	<Navbar.Toggle aria-controls="basic-navbar-nav" />
</>
;

// Collect the nav links, forms, and other content for toggling
const MenuBarContent = (props) => {
	const au = props.currentEvent.name === 'AU';
	const a100 =  props.currentEvent.name === 'A100';
	return (

	<Navbar.Collapse id="basic-navbar-nav">
	<Nav className="mr-auto">

		<Nav.Link href="/intro">HOME</Nav.Link>

		<NavDropdown title="ENTRY" id="basic-nav-dropdown">
			<NavDropdown.Item as={Link} to="/prices">PRICES</NavDropdown.Item>
			<NavDropdown.Item as={Link} to="/enter"> ENTER</NavDropdown.Item>
			<NavDropdown.Item as={Link} to="/merchandise">MERCHANDISE</NavDropdown.Item>
			<NavDropdown.Item as={Link} to="/entries-list">ENTRIES SO FAR</NavDropdown.Item>
			<NavDropdown.Divider />
		</NavDropdown>

		<NavDropdown title="EVENT INFORMATION" id="basic-nav-dropdown">
			{au && <NavDropdown.Item as={Link} to="/directions">HOW TO GET THERE</NavDropdown.Item>}
			{au && <NavDropdown.Item as={Link} to="/schedule_AU">RACE DAY SCHEDULE</NavDropdown.Item>}
			{a100 && <NavDropdown.Item as={Link} to="/schedule_A100">A100 RACE SCHEDULE</NavDropdown.Item>}
			<NavDropdown.Item as={Link} to="/course_notes">COURSE INFO &amp; MAPS</NavDropdown.Item>
			{au && <NavDropdown.Item as={Link} to="/what_to_expect">WHAT TO EXPECT</NavDropdown.Item>}
			<NavDropdown.Item as={Link} to="/equipment_list">EQUIPMENT LIST</NavDropdown.Item>
			{a100 && <NavDropdown.Item as={Link} to="/spirit_award">A100 Spirit Award Trophy</NavDropdown.Item>}
			<NavDropdown.Item as={Link} to="/prizes">PRIZES</NavDropdown.Item>
		</NavDropdown>

	</Nav>
	</Navbar.Collapse>
	)
	;
}
	const OLD = (props) => {
		return (
<div className="collapse navbar-collapse"
	id="bs-example-navbar-collapse-1">
	<ul className="nav navbar-nav">

		<li><Link to='/intro'>HOME</Link></li>

{/*
		<li className="dropdown"><button className="dropdown-toggle"
			data-toggle="dropdown" aria-expanded="false">RESULTS
				<span className="caret"></span>
		</button>

			<ul className="dropdown-menu" role="menu">
				<li onClick="loadmaincontent('results/spirit_award.php')"><a
					href="#">A100 Spirit Award</a></li>
				<li onClick="loadmaincontent('results/records.php')"><a href="#">Course
						Records</a></li>
				<li><a href="results/Master_Results.xlsx" title="All results for every year in one spreadsheet">MASTER RESULTS</a></li>
				<li><a target="_blank" href="results/A100_Results_2020.pdf">2020
						A100 RESULTS</a></li>
				<li><a target="_blank" href="results/AU_Results_2020.pdf">2020 AU
						RESULTS</a></li>
				<li><a target="_blank"
					href="results/A100 and Undulator times 2019.xlsx">2019 RESULTS</a></li>
				<li><a target="_blank"
					href="https://docs.google.com/spreadsheets/d/14x0hCkAPMbertFb8YOBZupYoh1EFa_ATBfazKcHZ6NQ">2018
						RESULTS</a></li>
				<li><a target="_blank"
					href="https://www.dropbox.com/sh/1a0dumdxuh6wzlo/AACEDHJWNpwI1ApPzbrojxKVa?dl=0">2017
						RESULTS</a></li>
				<li><a target="_blank"
					href="https://docs.google.com/spreadsheets/d/1fVN-G5ftA--eqb1DRrJAubYEgSs8e3siQcyB5TtFnRY/edit#gid=0">2016
						RESULTS</a></li>
				<li><a href="results/AU_A100_2015_V6.xlsx">2015 RESULTS</a></li>

				<li><a className="AU" href="results/Undulator Results 2014.xls">2014
						RESULTS</a></li>
				<li><a className="A100" href="results/A100 Results 2014.xls">2014
						RESULTS</a></li>

				<li className="AU"><a href="results/results_2013.jpg">2013 RESULTS</a></li>

			</ul></li>

		<li className="dropdown"><a href="#" className="dropdown-toggle"
			data-toggle="dropdown" role="button" aria-expanded="false">MORE <span
				className="caret"></span></a>

			<ul className="dropdown-menu" role="menu">
				<li><a href="#" onClick="loadmaincontent('gallery.php')">PHOTOS</a></li>
				<li><a href="#" onClick="loadmaincontent('youtube.php')">VIDEOS</a></li>
				<li><a href="#" onClick="loadmaincontent('articles.php')">ARTICLES</a></li>
				<li><a href="#"
					onClick="loadmaincontent('information/accommodation.php')">PLACES
						TO STAY</a></li>
				<li className="divider"></li>
				<li><a href="#"
					onClick="loadmaincontent('information/other_races.php')">OTHER
						RACES</a></li>

				<li><a href="#"
					onClick="loadmaincontent('information/aorangi_trust.php')">AORANGI
						TRUST</a></li>
			</ul></li>

		<li><a className="A100 other_event_link" href="/"> <img
				className="img-responsive" data-toggle="tooltip" data-placement="top"
				title="For something a little lighter, try the 1-day Aorangi Undulator"
				src="<?php echo $banner_image_other ?>" />
		</a> <a className="AU other_event_link" href="/php/A100.php"> <img
				className="img-responsive" data-toggle="tooltip" data-placement="top"
				title="Sounds too easy? Try the Aorangi	Undulator 100"
				src="<?php echo $banner_image_other ?>" /></a></li>
*/}
	</ul>
</div>);
}
;


export const MenuBar = (props) =>
<Navbar bg="dark" expand="lg">
	<MenuBarHeader/>
	<MenuBarContent currentEvent={props.currentEvent} switchEvent={props.switchEvent} />
</Navbar>;

export default MenuBar;