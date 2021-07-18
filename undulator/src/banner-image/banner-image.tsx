import Image from 'react-bootstrap/Image';
import { EventType } from '../index';

type Props = {
	currentEvent: EventType;
}

export const BannerImage = (props: Props) =>
	<Image className={`${props.currentEvent.name} banner_image img-responsive`}
		alt={props.currentEvent.name}
		src={`images/logos/${props.currentEvent.name}_banner.png`} />;

export default BannerImage;