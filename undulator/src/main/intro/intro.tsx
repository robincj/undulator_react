import {
    Link
} from "react-router-dom";
import ToolTip from '../../components/tooltip/tooltip';
import cfg from '../../config';
import AUIntro from './au_intro';
import A100Intro from './a100_intro';

const fileRowCount = (filePath) => {
    // @TODO fetch line count of filePath
    return 10;
}

export const Intro = (props) => {
    const evName = props.currentEvent.name;
    let maxEntries = cfg.MAX_ENTRIES_AU;
    let fileName = cfg.ENTRIES_FILE_AU;

    let introInfo = <AUIntro switchEvent={props.switchEvent} />

    if (evName === 'A100') {
        maxEntries = cfg.MAX_ENTRIES_A100;
        fileName = cfg.ENTRIES_FILE_A100;
        introInfo = <A100Intro switchEvent={props.switchEvent} />
    }
    const filePath = `${cfg.ENTRIES_DIR}${fileName}`;
    const entrycount = fileRowCount(filePath);
    const entriesLeft = maxEntries - entrycount;

    let entryMessage: JSX.Element;

    if (!cfg.ENTRIES_OPEN) {
        entryMessage = <div><h4>Entries are not yet open for the next event.</h4></div>;
    } else if (cfg.ONLINE_ENTRIES_CLOSED) {
        entryMessage = <div><h4>Online entries are now closed but entries for the 1-day event can be made on the event day at a cost of ${cfg.PRICE_AU_LATE}.</h4></div>;
    } else if (entriesLeft <= 0) {
        entryMessage = <div>
            <h4 style={{ color: "red" }}>The event has reached its entry limit!</h4>
            <h4>
                <ToolTip
                    placement={"left"} id={'waitlist_tooltip'} tip={'Click here to put yourself on the wait-list'}>
                    <Link to="/enter">Click here to put yourself on the wait-list</Link>
                </ToolTip>
            </h4>
        </div >;
    } else {
        entryMessage = <div><h4>
            <ToolTip
                placement={"left"} id={'enter_tooltip'} tip={'Click here to enter'}>
                <Link to="/enter">Entries are open now!</Link>
            </ToolTip>
        </h4>{entriesLeft < maxEntries * 0.8 ?
            <div><h4>Only {entriesLeft} entries Left!</h4></div> : ''}
        </div >;
    }

    return <div>
        {entryMessage}
        {introInfo}
    </div>;

    /*
    
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