import React from 'react';


export const BannerImage = (props) => 
	 <img className={`${props.currentEvent.name} banner_image img-responsive`}
	 alt={props.currentEvent.name}
	src={`images/logos/${props.currentEvent.name}_banner.png`} />;

export default BannerImage;