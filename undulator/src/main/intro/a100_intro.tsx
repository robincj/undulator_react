import {
    Link
} from "react-router-dom";
import Date from '../../components/date-helper/date-helper';
import cfg from '../../config';

interface Props {
    switchEvent: () => void;
}

export const A100Intro = (props: Props) =>
    <div className="text-center">
        <h3><Date.DateFormat format='dddd DS MMMM, YYYY'>{cfg.DATE_A100_DAY1}</Date.DateFormat>
            {' to '}
            <Date.DateFormat format='dddd DS MMMM, YYYY'>{cfg.DATE_A100_DAY3}</Date.DateFormat></h3>

        <p> The <em>Aorangi Undulator 100</em> is a trail-running race in which competitors cover over 100km in 3 days.<br />
            It starts south-east of Wellington, on the Eastbourne coastline,
            traverses the Parangarahu Lakes area, the Orogorongo Range and the mountainous Aorangi Forest Park, in south-eastern Wairarapa to finish at Waikuku Lodge.</p>

        <p>
            If you would like to try something less epic then you could do the
            <Link to='/au' >{' Aorangi Undulator '}</Link> one-day, 33km, event,
            which is over the same course as the second day of the Aorangi Undulator 100.
        </p>
    </div >
    ;

export default A100Intro;