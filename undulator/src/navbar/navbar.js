import React from 'react';
import 'navbar.css';


<?php require('include_common.php'); ?>
<?php
$tstamp = date("Ymdhis");
?>
<script>
	var tstamp = <?= $tstamp ?>;
</script>

<style>
@media ( min-width : 768px) {
	.navbar .navbar-nav {
		display: inline-block;
		float: none;
		vertical-align: top;
	}
	.navbar .navbar-collapse {
		text-align: center;
	}
}

.navbar li {
	text-align: center;
}

nav a.other_event_link {
	padding: 5px;
}

nav .other_event_link img {
	width: 150px;
}
</style>

<nav class="navbar navbar-default">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>

		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">

				<li><a href="#" onClick="loadmaincontent('home.php', true)">HOME</a></li>

				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown" role="button" aria-expanded="false">ENTER <span
						class="caret"></span></a>

					<ul class="dropdown-menu" role="menu">
						<li><a href="#"
							onClick="loadmaincontent('information/prices.php')">PRICES</a></li>
						<li><a href="#" onClick="loadmaincontent('enter.php')">ENTER</a></li>
						<li><a href="#" onClick="loadmaincontent('merchandise.php')">MERCHANDISE</a></li>
						<li><a href="#"
							onClick="loadmaincontent('information/entries.php?'+tstamp)">ENTRIES
								SO FAR</a></li>
					</ul></li>

				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown" role="button" aria-expanded="false">EVENT
						INFORMATION<span class="caret"></span>
				</a>

					<ul class="dropdown-menu" role="menu">

						<li class="AU"><a href="#"
							onClick="loadmaincontent('information/directions.php')">HOW TO
								GET THERE</a></li>
						<!-- <li class="A100"><a href="#" onClick="loadmaincontent('information/directions.php')">DAY 2
								START: HOW TO GET THERE</a></li> -->
						<li class="AU"><a href="#"
							onClick="loadmaincontent('information/schedule_AU.php')">RACE DAY
								SCHEDULE</a></li>
						<li class="A100"><a href="#"
							onClick="loadmaincontent('information/schedule_A100.php')">A100
								RACE SCHEDULE</a></li>

						<li><a href="#"
							onClick="loadmaincontent('information/course_notes/course_notes.php')">COURSE
								INFO &amp; MAPS</a></li>
						<!-- <li class="AU"><a href="#"
							onClick="loadmaincontent('information/maps.php')">RACE MAPS AND
								PROFILES</a></li>
								 -->

						<li class="AU"><a href="#"
							onClick="loadmaincontent('information/what_to_expect.php')">WHAT
								TO EXPECT</a></li>
						<!--
						<li onClick="loadmaincontent('information/q_and_a.php')"><a
							href="#">Q &amp; A</a></li>
						-->
						<li onClick="loadmaincontent('information/equipment_list.php')"><a
							href="#">EQUIPMENT LIST</a></li>

						<li class="A100"><a href="#"
							onClick="loadmaincontent('results/spirit_award.php')"> A100
								Spirit Award Trophy</a></li>
						<li><a href="#"
							onClick="loadmaincontent('information/prizes.php')"> PRIZES</a></li>
					</ul></li>

				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown" role="button" aria-expanded="false">RESULTS
						<span class="caret"></span>
				</a>

					<ul class="dropdown-menu" role="menu">
						<li onClick="loadmaincontent('results/spirit_award.php')"><a
							href="#">A100 Spirit Award</a></li>
						<li onClick="loadmaincontent('results/records.php')"><a href="#">Course
								Records</a></li>
						<li><a href="results/Master_Results.xlsx" title="All results for every year in one spreadsheet">MASTER RESULTS</a></li>
						<li><a target="_blank" href="results/A100_Results_2020.pdf">2020
								A100 RESULTS</a></li>
						<li><a target="_blank" href="results/AU_Results_2020.pdf">2020 AU
								RESULTS</a></li>
						<li><a target="_blank"
							href="results/A100 and Undulator times 2019.xlsx">2019 RESULTS</a></li>
						<li><a target="_blank"
							href="https://docs.google.com/spreadsheets/d/14x0hCkAPMbertFb8YOBZupYoh1EFa_ATBfazKcHZ6NQ">2018
								RESULTS</a></li>
						<li><a target="_blank"
							href="https://www.dropbox.com/sh/1a0dumdxuh6wzlo/AACEDHJWNpwI1ApPzbrojxKVa?dl=0">2017
								RESULTS</a></li>
						<li><a target="_blank"
							href="https://docs.google.com/spreadsheets/d/1fVN-G5ftA--eqb1DRrJAubYEgSs8e3siQcyB5TtFnRY/edit#gid=0">2016
								RESULTS</a></li>
						<li><a href="results/AU_A100_2015_V6.xlsx">2015 RESULTS</a></li>

						<li><a class="AU" href="results/Undulator Results 2014.xls">2014
								RESULTS</a></li>
						<li><a class="A100" href="results/A100 Results 2014.xls">2014
								RESULTS</a></li>

						<li class="AU"><a href="results/results_2013.jpg">2013 RESULTS</a></li>

					</ul></li>

				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown" role="button" aria-expanded="false">MORE <span
						class="caret"></span></a>

					<ul class="dropdown-menu" role="menu">
						<!-- <li><a href="#"
							onClick="loadmaincontent('information/quotes.php')">INSPIRATIONAL
								QUOTES</a></li>						
					 -->
						<li><a href="#" onClick="loadmaincontent('gallery.php')">PHOTOS</a></li>
						<li><a href="#" onClick="loadmaincontent('youtube.php')">VIDEOS</a></li>
						<li><a href="#" onClick="loadmaincontent('articles.php')">ARTICLES</a></li>
						<li><a href="#"
							onClick="loadmaincontent('information/accommodation.php')">PLACES
								TO STAY</a></li>
						<li class="divider"></li>
						<li><a href="#"
							onClick="loadmaincontent('information/other_races.php')">OTHER
								RACES</a></li>

						<li><a href="#"
							onClick="loadmaincontent('information/aorangi_trust.php')">AORANGI
								TRUST</a></li>
					</ul></li>

				<!-- 
				<li id="othereventlink"><a class="A100" style="display: none"
					href="/">AORANGI UNDULATOR (1 day)</a> <a class="AU"
					style="display: none" href="/php/A100.php">AORANGI UNDULATOR 100</a></li>
			-->
				<?php
    /**
     *
     * @var string $banner_image_other
     */
    ?>
				<li><a class="A100 other_event_link" href="/"> <img
						class="img-responsive" data-toggle="tooltip" data-placement="top"
						title="For something a little lighter, try the 1-day Aorangi Undulator"
						src="<?php echo $banner_image_other ?>" />
				</a> <a class="AU other_event_link" href="/php/A100.php"> <img
						class="img-responsive" data-toggle="tooltip" data-placement="top"
						title="Sounds too easy? Try the Aorangi	Undulator 100"
						src="<?php echo $banner_image_other ?>" /></a></li>

			</ul>

		</div>
		<!-- /.navbar-collapse -->
	</div>
	<!-- /.container-fluid -->
</nav>
