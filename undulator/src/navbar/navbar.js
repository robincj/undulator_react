import React from 'react';
import {
	Link
} from "react-router-dom";
// import './navbar.css';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './navbar.css';

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
	const a100 = props.currentEvent.name === 'A100';

	return (

		<Navbar.Collapse id="main-navbar">
			<Nav className="mr-auto">

				<Nav.Link as={Link} to="/intro">HOME</Nav.Link>

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

				<NavDropdown title="RESULTS" id="basic-nav-dropdown">
					<NavDropdown.Item as={Link} to="/spirit_award">A100 Spirit Award Trophy</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/records">COURSE RECORDS</NavDropdown.Item>
					{/*All results for every year in one spreadsheet*/}
					<NavDropdown.Item as={Link} to="/results/Master_Results.xlsx">MASTER RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/A100_Results_2020.pdf">2020 A100 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/AU_Results_2020.pdf">2020 AU RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/A100 and Undulator times 2019.xlsx">2019 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="https://docs.google.com/spreadsheets/d/14x0hCkAPMbertFb8YOBZupYoh1EFa_ATBfazKcHZ6NQ">2018 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="https://www.dropbox.com/sh/1a0dumdxuh6wzlo/AACEDHJWNpwI1ApPzbrojxKVa?dl=0">2017 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="https://docs.google.com/spreadsheets/d/1fVN-G5ftA--eqb1DRrJAubYEgSs8e3siQcyB5TtFnRY/edit#gid=0">2016 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/AU_A100_2015_V6.xlsx">2015 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/Undulator Results 2014.xls">2014 AU RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/A100 Results 2014.xls">2014 A100 RESULTS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/results/results_2013.jpg">2013 RESULTS</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="MORE" id="basic-nav-dropdown">
					<NavDropdown.Item as={Link} to="/gallery">PHOTOS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/youtube"> VIDEOS</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/articles">ARTICLES</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/accommodation">PLACES TO STAY</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item as={Link} to="/other_races">OTHER RACES</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/aorangi_trust">AORANGI TRUST</NavDropdown.Item>
				</NavDropdown>

				<Nav.Link className={'other_event_link'}>
					<OverlayTrigger
						key={"left"}
						placement={"left"}
						overlay={
							<Tooltip>
								{a100 && 'For something a little lighter, try the 1-day Aorangi Undulator'}
								{au && 'Sounds too easy? Try the Aorangi Undulator 100'}
							</Tooltip>
						}
					><Image src={`images/logos/${props.otherEvent.name}_banner.png`} onClick={props.switchEvent()} />
					</OverlayTrigger>
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	);
}

export const MenuBar = (props) =>
	<Navbar bg="light" expand="lg">
		<MenuBarHeader />
		<MenuBarContent otherEvent={props.otherEvent} currentEvent={props.currentEvent} switchEvent={props.switchEvent} />
	</Navbar>;

export default MenuBar;