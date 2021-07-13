import React from 'react';
import Image from 'react-bootstrap/Image';


export const BannerImage = (props) =>
	<Image className={`${props.currentEvent.name} banner_image img-responsive`}
		alt={props.currentEvent.name}
		src={`images/logos/${props.currentEvent.name}_banner.png`} />;

export default BannerImage;