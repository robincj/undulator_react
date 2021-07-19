import {
    Link
} from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import config from '../../config';

const fileRowCount = () => {
    return 10;
}

export const Intro = (props) => {

    if (props.currentEvent.name === 'AU') {
        const entrycount = fileRowCount();
        const entriesLeft = config.MAX_ENTRIES_AU - entrycount;

        return (
            <div>
                {
                    entriesLeft <= 0 ?
                        (<div className="AU">
                            <h4 style={{ color: "red" }}>The event has reached its entry limit!</h4>
                            <h4><OverlayTrigger
                                key={"left"}
                                placement={"left"}
                                overlay={
                                    <Tooltip id={'waitlist_tooltip'}>Click here to put yourself on the wait-list
                                    </Tooltip>
                                }
                            >
                                <Link to="/enter">Put yourself on
                                    the wait-list in case entries become available.</Link>
                            </OverlayTrigger>
                            </h4>
                        </div >)
                        :
                        (<div className="AU"><h4><OverlayTrigger
                            key={"left"}
                            placement={"left"}
                            overlay={
                                <Tooltip id={'enter_tooltip'}>Click here to enter
                                </Tooltip>
                            }
                        >
                            <Link to="/enter">Entries are open now!</Link>
                        </OverlayTrigger>
                        </h4>{entriesLeft < config.MAX_ENTRIES_AU * 0.8 ?
                            <div className='AU'><h4>Only $entriesLeft entries Left!</h4></div> : ''}
                        </div >)
                }
            </div >
        );
    }
    /*
    
    $entrylist_file = ENTRIES_DIR.ENTRIES_FILE_A100;
    if (!file_exists($entrylist_file))
        file_put_contents($entrylist_file, '');
    $entrycount = file_rowcount($entrylist_file, TRUE);
    $entriesLeft = MAX_ENTRIES_A100 - $entrycount;
    $a100Msg = '<div class="A100">';
    
    if (!ENTRIES_OPEN) {
        $a100Msg = '';
        $auMsg = "<div><h4>Entries are not yet open for the next event.</h4></div>";
    } elseif(ONLINE_ENTRIES_CLOSED) {
        $auMsg = "<div><h4>Online entries are now closed but entries for the 1-day event can be made on the event day at a cost of $".PRICE_AU_LATE. ".</h4></div>";
    } elseif($entriesLeft <= 0)
    $a100Msg.= $full;
        else {
        $a100Msg.= $notFull;
        $auMsg.= $entriesLeft < MAX_ENTRIES_A100 * 0.6 ? "<div class='A100'><h4>Only $entriesLeft entries Left!</h4></div>" : '';
    }
    // OVERRIDE ENTRY MESSAGE FOR RESULTS
    // $a100Msg = '';
    // $auMsg = '<div><a href="https://drive.google.com/file/d/0B0kHo5rD1yVIUmpKa1FfSTJpU01tcno4YlNqWlNKem52QU5J/view?usp=sharing">Results for 2016 are here.</a></div>';
    
    echo "<!-- max: ".MAX_ENTRIES_A100. " count:  $entrycount Left: $entriesLeft -->";
        ?>
        <div class="row">
            <div class='col-xs-12'>
                <div id="intro"></div>
            </div>
        </div>
        <script>
        $("#intro").load("php/information/" + au_event + "_intro.php");
        </script>
        
        <div class="row">
            <div class='col-xs-12'>
                <div class="text-center"><?= $a100Msg . $auMsg?></div>
            </div>
        </div>
        
        <div class="row AU">
            <div class='col-xs-12'>
                <div class="text-center">
                    <h4>
                        <a href="#" onClick="loadmaincontent('information/prizes.php')">Prizes</a>
                    </h4>
                </div>
            </div>
        </div>
        <div class="row A100">
            <div class='col-xs-12'>
                <div class="text-center">
                    <a href="#" onClick="loadmaincontent('results/spirit_award.php')">
                        A100 Spirit Award Trophy</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class='col-xs-12'>
                <div class="text-center">
                    <h4>
                        <a target="_blank" href="results/AU_Results_2020.pdf"> 2020 Aorangi
                            Undulator 1-day Results</a>
                    </h4>
                    <h4>
                        <a target="_blank" href="results/A100_Results_2020.pdf"> 2020
                            Aorangi Undulator 100 Results</a>
                    </h4>
                </div>
            </div>
        </div>
        <!-- 
        < div class="row" >
        <div class='col-xs-12'>
            <div class="text-center">
                <a href="#" onClick="loadmaincontent('information/course_notes/course_notes.php')">Detailed
                    course maps</a>
            </div>
        </div>
        </div >
        -->
        
        <br />
        <div class="row">
            <div class='mainsponsor col-xs-12'
                style='background-color: #662d91; color: white;'>
                <?php
        // Brought to you with a big thanks to our main sponsor <a
        // href="http://www.powerco.co.nz/"><img style="padding: 3px;"
        // src="/images/sponsors/powerco_logo.png" /></a>
        ?>
            </div>
            <div class='quotebox col-xs-12' style='display: none;'><?php include INFO_DIR."quotes.php"?></div>
        </div>
        <script>$(document).ready(function(){
            setTimeout(function () { $('.mainsponsor').hide('slow'); $('.quotebox').show('slow'); }, 8000);
        });
        </script>
        <br />
        <div class="row">
            <div class='col-xs-12'><?php include 'lib/jssor_bootstrap_slider.php';?>	</div>
        </div>
        );
        */
};

export default Intro;