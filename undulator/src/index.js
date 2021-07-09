import React from 'react';
import ReactDOM from 'react-dom';
import Footer from 'footer';
import Navbar from 'navbar/navbar';
import './main.css';
import './unseen-column.css';

const Front = () => <>
<div id='wrap'>
		<header>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<img class="<?= $au_event ?> banner_image img-responsive"
							src="<?= $banner_image ?>" />
					</div>
				</div>
			</div>
		</header>
<Navbar/>

	<section>
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-2 text-center">
					<?php include 'links_col.php';?>				
				</div>

					<div id="main" class="maincontent col-xs-12 col-md-9"></div>

					<div class="col-xs-12 col-md-1 share-icon-col text-center">
					<?php include 'share_icons.php';?>
				</div>
				</div>
			</div>

		</section>


		<script>loadmaincontent('<?= $maincontent ?>', true)</script>

		<div id="push"></div>
	</div>
	<Footer/>
	</>
	;

// ========================================

ReactDOM.render(
	<Front />,
	document.getElementById('root')
);
