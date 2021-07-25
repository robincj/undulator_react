import {
    Link
} from "react-router-dom";
import Date from '../../components/date-format/date-format';
import cfg from '../../config';

interface Props {
    switchEvent: () => void;
}
export const AUIntro = (props: Props) =>
    <div className="text-center">
        <h3><Date format='dddd DS MMMM, YYYY'>{cfg.DATE_AU}</Date></h3>

        <p>
            The Aorangi Undulator is a 33km trail-running race which takes
            competitors through five valleys and four <i>undulations</i> among the
            mountains of the Aorangi Forest Park, situated in the south-east of
            the Wairarapa. The November 2014 Aorangi Undulator was the first
            official race and the subsequent events have been even more popular.
            Winners are expected to finish in around 5 hours while others will
            take up to 10 hours.
        </p>
        <p>
            Those inclined towards longer distance events may want to look at the
            <button onClick={props.switchEvent}>Aorangi Undulator 100</button>, a 100km 3 day race
            starting in Eastbourne and finishing at Waikuku Lodge in the Aorangi
            forest park.
        </p>
    </div>
    ;

export default AUIntro;