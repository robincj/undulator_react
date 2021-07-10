import React from 'react';


export const BannerImage = (props) => 
	 <img className={`${props.currentEvent} banner_image img-responsive`}
	src={`images/logos/${props.currentEvent}_banner.png`} />;

export default BannerImage;