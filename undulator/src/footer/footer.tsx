import { Link } from "react-router-dom";
import ToolTip from '../components/tooltip/tooltip';
import { bannerImagePath } from '../banner-image/banner-image';
import { getEventByName } from '../index';

import './footer.scss';


export const Footer = () => {
	const au = getEventByName('AU');
	const a100 = getEventByName('A100');

	return <>
		<div id='footer-spacer' />
		<footer>
			<ToolTip placement={"top"} id={'au_footer_tooltip'} tip={au.longName}>
				<Link to={`/${au.name}`} ><img
					alt={au.longName}
					src={bannerImagePath(au)} />
				</Link>
			</ToolTip>

			<ToolTip placement={"top"} id={'a100_footer_tooltip'} tip={a100.longName}>
				<Link to={`/${a100.name}`} ><img
					alt={a100.longName}
					src={bannerImagePath(a100)} />
				</Link>
			</ToolTip>
			<div className='contact'>
				<div style={{ textAlign: 'right' }}>
					<br />Contact: Chris Martin 021 2166436 or email:
					info@aorangiundulator.org
				</div>
			</div>
		</footer >
	</>
		;
}

export default Footer;