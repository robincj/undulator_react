import { EventType } from '../index';

import './banner-image.scss';

type Props = {
	currentEvent: EventType;
}

export const bannerImagePath = (event: EventType) => `/images/logos/${event.name}_banner.png`;

export const BannerImage = (props: Props) =>
	<div className="banner_image_container">
		<img alt={props.currentEvent.name} src={bannerImagePath(props.currentEvent)} />
	</div>;

export default BannerImage;