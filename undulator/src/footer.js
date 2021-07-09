import React from 'react';

export const Footer = () =>
	<div id="footer">
		<div class="container">
			<div class="row">
				<div class='col-sm-3'>					
				<a href="/"> <img class="img-responsive" data-toggle="tooltip"
						data-placement="top" title="The 1-day Aorangi Undulator"
						alt="The 1-day Aorangi Undulator"
						src="<?php echo $banner_image ?>" />
					</a>
				</div>
				<div class='col-sm-3'>
					<a href="/php/A100.php"> <img class="img-responsive"
						data-toggle="tooltip" data-placement="top"
						title="The 3-day Aorangi Undulator 100"
						alt="The 3-day Aorangi Undulator 100"
						src="<?php echo $banner_image_other ?>" /></a>
				</div>
				<div class='col-sm-6 contact'>
					<div style={{textAalign: 'right'}}>
						<br />Contact: Chris Martin 021 2166436 or email:
						info@aorangiundulator.org
					</div>
				</div>
			</div>
		</div>
	</div>
	;
	
export default Footer;