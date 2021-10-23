import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../../components/arrow.scss';
import './covid.scss';

export const CovidInfo = () => {
    const [showAll, setShowAll] = useState(false);
    const compulsory = <b>All competitors must carry a suitable mask and small container of hand sanitiser throughout the event.</b>;
    const fullMessage = <><p>As you will be all too aware, the Covid-19 situation is evolving… but we are hoping and planning under the assumption that the event will be held under Level 1 or 2 Covid-19 restriction rules.</p>
        <p>We are looking to the NZ Event Sector Voluntary Code and sporting bodies for best practice expectations based on the Ministry of Health guidance.  This will include:</p>
        <ul>
            <li>contact tracing (QR codes for the covid app)</li>
            <li>compulsory mask-wearing at start/finish areas</li>
            <li>{compulsory}</li>
        </ul>
        <p>We will provide updates as things develop, here and on the website, and communicate race-day measures ahead of time. </p>

        <p>Please get vaccinated, stay safe and keep training!</p>
    </>;


    return <div className="covid-info" >
        <h3><img width="50px" alt="virus" src="images/logos/coronavirus-trans-bkg-small.png" />
            Covid-19
            <Button variant="outline-success" className='showall' onClick={() => setShowAll(!showAll)}><i className={showAll ? 'arrow up' : 'arrow down'} /></Button>
        </h3>
        {showAll ? fullMessage : compulsory}
    </div>
        ;
}
export default CovidInfo;