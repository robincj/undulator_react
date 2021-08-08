import { ReactElement } from "react";
import {
	Link, useRouteMatch
} from "react-router-dom";
import { CommonProps } from '../index';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ToolTip from '../components/tooltip/tooltip';

import './navbar.scss';

interface DropLinkProps { text: string, url: string };
let keyNum = 1;

const DropLink = (props: DropLinkProps) => {
	let pathUrl = props.url;
	const { path } = useRouteMatch();
	// if url does not start with / or https:// then prepend the route path
	if (!/^(\/|https?:\/\/)/.test(props.url)) {
		pathUrl = `${path}/${props.url}`;
	}
	return <NavDropdown.Item key={`navdropdown.item${keyNum++}`} as={Link} to={pathUrl}>{props.text}</NavDropdown.Item>;
}

let dropKey = 1;
const DropLinks = (props: { links: ([string, string] | ReactElement | null | false)[] }) => {
	return <>{props.links.filter(p => p).map(p => {
		return p instanceof Array ? <DropLink text={p[0]} url={p[1]} /> : p;
	})}</>
};

// Collect the nav links, forms, and other content for toggling
const MenuBarContent = (props: CommonProps) => {
	const au = props.currentEvent.name === 'AU';
	const a100 = props.currentEvent.name === 'A100';
	const { path } = useRouteMatch();
	return (
		<Navbar.Collapse id="main-navbar">
			<Nav>

				<Nav.Link as={Link} to={`${path}/intro`}> HOME</Nav.Link>

				<NavDropdown title="ENTRY" id="basic-nav-dropdown">
					<DropLinks links={[
						['PRICES', 'prices'],
						['ENTER', 'enter'],
						['MERCHANDISE', 'merchandise'],
						['ENTRIES SO FAR', 'entries-list']
					]} />
				</NavDropdown>

				<NavDropdown title="EVENT INFORMATION" id="basic-nav-dropdown">
					<DropLinks links={[
						au && ['HOW TO GET THERE', `${path}/directions`],
						au && ['RACE DAY SCHEDULE', `${path}/schedule_AU`],
						a100 && ['A100 RACE SCHEDULE', `${path}/schedule_A100`],
						['COURSE INFO & MAPS', `${path}/course_notes`],
						au && ['WHAT TO EXPECT', `${path}/what_to_expect`],
						['EQUIPMENT LIST', `${path}/equipment_list`],
						a100 && ['A100 Spirit Award Trophy', `${path}/spirit_award`],
						['PRIZES', `${path}/prizes`],
					]} />
				</NavDropdown>

				<NavDropdown title="RESULTS" id="basic-nav-dropdown">
					<DropLinks links={[
						['A100 Spirit Award Trophy', 'spirit_award'],
						['COURSE RECORDS', 'records'],
						['MASTER RESULTS', 'results/Master_Results.xlsx'],
						['2020 A100 RESULTS', 'results/A100_Results_2020.pdf'],
						['2019 RESULTS', 'results/A100 and Undulator times 2019.xlsx'],
						['2018 RESULTS', 'https://docs.google.com/spreadsheets/d/14x0hCkAPMbertFb8YOBZupYoh1EFa_ATBfazKcHZ6NQ'],
						['2017 RESULTS', 'https://www.dropbox.com/sh/1a0dumdxuh6wzlo/AACEDHJWNpwI1ApPzbrojxKVa?dl=0'],
						['2016 RESULTS', 'https://docs.google.com/spreadsheets/d/1fVN-G5ftA--eqb1DRrJAubYEgSs8e3siQcyB5TtFnRY/edit#gid=0'],
						['2015 RESULTS', 'results/AU_A100_2015_V6.xlsx'],
						['2014 AU RESULTS', 'results/Undulator Results 2014.xls'],
						['2014 A100 RESULTS', 'results/A100 Results 2014.xls'],
						['2013 RESULTS', 'results/results_2013.jpg'],
					]} />
				</NavDropdown>

				<NavDropdown title="MORE" id="basic-nav-dropdown">
					<DropLinks links={[
						['PHOTOS', 'gallery'],
						['VIDEOS', 'youtube'],
						['ARTICLES', 'articles'],
						['PLACES TO STAY', 'accommodation'],
						<NavDropdown.Divider key={dropKey++} />,
						['OTHER RACES', 'other_races'],
						['AORANGI TRUST', 'aorangi_trust'],
					]} />
				</NavDropdown>

				<ToolTip
					placement={"left"} id={'other_event_tooltip'} tip={a100 ? 'For something a little lighter, try the 1-day Aorangi Undulator'
						: 'Sounds too easy? Try the Aorangi Undulator 100'}>
					<Nav.Link as={Link} to={`/${props.otherEvent.name}`} className={'other_event_link'} ><Image src={`images/logos/${props.otherEvent.name}_banner.png`} />
					</Nav.Link>
				</ToolTip>
			</Nav >
		</Navbar.Collapse >
	);
}

export const MenuBar = (props: CommonProps) =>
	<Navbar bg="light" expand="lg">
		<MenuBarContent {...props} />
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
	</Navbar>;

export default MenuBar;