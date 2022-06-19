import { useState } from 'react';
import dayjs from 'dayjs';
import { Form, Container, Row, Col, FormControlProps } from 'react-bootstrap'
import DateHelper from 'components/date-helper/date-helper';
import cfg from '../../config';
import { CommonProps, EventType } from '../../index';
import Prices from '../prices/prices';
import MerchandiseForm from './merchandise-form';

import './enter.scss';

const calculateEventPrice = (eventName: EventType['name']) => {
    var price = 0;
    if (dayjs().isBefore(cfg.EARLY_ENTRY_DATE)) {
        price += eventName === "A100" ? cfg.PRICE_A100_EARLY : cfg.PRICE_AU_EARLY;
    }
    else {
        if (eventName === "A100") {
            price += cfg.PRICE_A100;
        }
        else if (eventName === "AU") {
            price += dayjs().isBefore(cfg.ONLINE_ENTRIES_CLOSED) ? cfg.PRICE_AU : cfg.PRICE_AU_LATE;
        }
    }
    return price;
}

interface EntryFormProps extends CommonProps {
    price: number,
    setMerchandisePrice: React.Dispatch<React.SetStateAction<number>>,
    selectedEventName: EventType['name'],
    setSelectedEventName: React.Dispatch<React.SetStateAction<"AU" | "A100">>
}

type InputFieldProps = FormControlProps & {
    label: string,
    subtext?: string | Element,
    required?: boolean,
    min?: number,
    // id: string,
    // placeholder?: string,
    // title?: string,
    // type?: 'email' | 'text' | 'textarea' | 'number',
    // value?: string | number,
}

const InputField = ({ label, id, placeholder, type, required, title, subtext, ...fieldProps }: InputFieldProps) => {
    const placeholderText = type === 'number' ? undefined : (placeholder || label);

    return <Form.Group as={Row} controlId={id}>
        <Form.Label column htmlFor={id}>{label}</Form.Label>
        <Col sm={8}>
            {type === 'textarea' ?
                <Form.Control as={type} placeholder={placeholderText} id={id}
                    title={title || label} {...fieldProps} ></Form.Control>
                :
                <Form.Control type={type || 'text'} placeholder={placeholderText} id={id}
                    title={title || label} {...fieldProps}></Form.Control>
            }
            {subtext ? <Form.Text>{subtext}</Form.Text> : ''}
        </Col>
    </Form.Group>
};

const EntryForm = (props: EntryFormProps) => {
    const labelClass = "col-sm-3 control-label";
    const inputDiv = "col-sm-9";

    return <div>
        <h2>Entry Form</h2>

        <div id="submittedmsgbox"></div>
        <h4>I am not weak and therefore would love to enter the Aorangi
            Undulator.</h4>

        <p>
            Please complete and submit the following form then kindly deposit the
            entry fee into this account:<br /> <b>Account name:</b> Aorangi
            Undulator &nbsp; <b>Account num:</b> 02 0576 0059160 01<br /> Use your
            full name as the reference. Payment would be appreciated within 7 days
            of registering.
        </p>

        <Container>
            <Form id="enter" name="enter" >
                <InputField label="First name" id="firstname" required />
                <InputField label="Last name" id="surname" required />
                <InputField label="Email" placeholder="Email address" id="email" type="email" required />
                <InputField label="Home" placeholder="Your home town/region" id="homelocation" />

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column htmlFor="event">        Weakness        </Form.Label>
                    <Col sm={8}>
                        <Form.Select aria-label="Event selection" name="event" id="event" className='form-control' required>
                            <option id="event_option_AU" value="au" selected={props.selectedEventName !== 'A100'} onClick={() => props.setSelectedEventName('AU')}>Not
                                Weak: Aorangi Undulator (33km mountain run)</option>
                            <option id="event_option_A100" value="A100" selected={props.selectedEventName === 'A100'} onClick={() => props.setSelectedEventName('A100')}>Definitely Not Weak:
                                A100 (100km, 3 day event)</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <InputField label={`Age on ${DateHelper.formatDate(cfg.DATE_A100_DAY1, 'DS MMM YYYY')}`} id="age" type="number" required defaultValue={20} min={10} />

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column htmlFor="gender">Gender</Form.Label>
                    <Col sm={8}>
                        <Form.Check
                            inline
                            label="M"
                            name="gender"
                            type="radio"
                            id="gender-M"
                        />
                        <Form.Check
                            inline
                            label="F"
                            name="gender"
                            type="radio"
                            id="gender-F"
                        />
                    </Col>
                </Form.Group>

                <InputField label="Estimated time (hrs)" placeholder="Hours" id="estimated_time"
                    title="If this is your first event of this type then estimate your road-marathon (42km) time and double it." />

                <InputField type="textarea" label="Running Resum&eacute;"
                    placeholder="Please let us know some of your previous running events and times"
                    id="previous_events"
                    title="Your previous running events and times" />

                <InputField label="1-Day AU events completed" id="completed_AU" type="number" required defaultValue={0} min={0} />
                <InputField label="A100 events completed" id="completed_A100" type="number" required defaultValue={0} min={0} />

                {props.selectedEventName === 'AU' ?
                    <div className="form-group team">
                        <label htmlFor="team_mates" className={labelClass}>Team Mate</label>
                        <div className="col-sm-9">
                            <div className='team-note'>
                                1-day event entrants must all fulfil one of the following:
                                <ol>
                                    <li>have completed the route previously</li>

                                    <li>run with another participant who has completed the route
                                        previously</li>

                                    <li>on race day join our a group of up to 10 people who will be escorted by an
                                        experienced runner who is familiar with the route</li>

                                    <li>prove you have enough wilderness experience to be granted exemption from the race organiser, e.g. by attending a
                                        <a href='https://www.facebook.com/groups/1617400398491286' target='_blank' rel="noreferrer"> Big Sunday Run</a>.
                                    </li>
                                </ol>
                            </div>
                            Please enter your selection or details of your team mate(s) here.<br />
                            Email info@aorangiundulator.org if you have any questions, would
                            like to request exemption or book a place with the escorted group.
                            <textarea name="team_mates" className="form-control" id="team_mates"
                                title="First time 1-day event entrants team mate(s) or solo exemption."
                                placeholder="Your selection or details of your team mate(s)"
                                required></textarea>
                        </div>
                    </div> : ''}

                <div className='form-group'
                    title="Runners are responsible for managing their own medical needs as marshals will only carry basic first aid supplies.">
                    <label htmlFor="medical" className={labelClass}>Medical Conditions</label>
                    <div className={inputDiv}>
                        <textarea name="medical" className='form-control' id="medical"
                            placeholder="Medical conditions and medications"></textarea>
                    </div>
                </div>
                <MerchandiseForm labelClass={labelClass} inputDiv={inputDiv} setMerchandisePrice={props.setMerchandisePrice} />

                <div className='form-group'>
                    <label htmlFor="query" className={labelClass}>Query</label>
                    <div className={inputDiv}>
                        <textarea name="query" className='form-control' id="query"
                            placeholder="If you have any queries or messages to pass along with your entry then enter them here."></textarea>
                    </div>
                </div>


                <div className='form-group'>
                    <label htmlFor="entryprice" className={labelClass}>Total price</label>
                    <div className='col-sm-6'>
                        <p id="entryprice" className='form-control-static'>
                            {props.price}
                            {dayjs().isBefore(cfg.EARLY_ENTRY_DATE) ? `(Early bird price before ${cfg.EARLY_ENTRY_DATE})` : ''}
                        </p>
                        <input type="hidden" name="price" id="entryprice_param" value={props.price} />
                    </div>
                    <div className='col-sm-2'>
                        <button type="submit" className='btn btn-success'>Register</button>
                    </div>
                </div>

            </Form >
        </Container>
    </div >;
}

// $("#enter").submit(function (event) {
//     event.preventDefault();
//     var ser = $("#enter").serialize();
//     $('#submittedmsgbox').load("enter_process.php", ser);
//     $('#enter')[0].reset();
//     setPrice();
//     return false;
// });



export const Enter = (props: CommonProps) => {
    const [selectedEventName, setSelectedEventName] = useState<EventType['name']>(props.currentEvent.name);
    const [merchandisePrice, setMerchandisePrice] = useState<number>(0);
    const eventPrice = calculateEventPrice(selectedEventName);

    return <div>
        <h2>Enter</h2>

        <div>
            <h4 style={{ color: "red" }}>
                {/* ENTRIES_OPEN? "Entries are now open for the ".EVENT_YEAR." event.":"Entries are not yet open for the next event." */}
                {cfg.ENTRIES_OPEN ?
                    (cfg.ONLINE_ENTRIES_CLOSED ?
                        `Online entries are now closed but entries for the 1-day event can be made on the event day at a cost of $${cfg.PRICE_AU_LATE}.` :
                        `Entries are now open for the ${cfg.EVENT_YEAR} event.`
                    ) : "Entries are not yet open for the next event."}
            </h4>
        </div>

        <div className="panel-group" id="prices_accordion" role="tablist"
            aria-multiselectable="true">

            <div className='panel panel-default'>
                <div className='panel-heading' role="tab" id="headingOne">
                    <h4 className='panel-title'>
                        <a data-toggle="collapse" data-parent="#prices_accordion"
                            href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"> View Prices </a>
                    </h4>
                </div>
                <div id="collapseOne" className='panel-collapse collapse' role="tabpanel"
                    aria-labelledby="headingOne">
                    <div className='panel-body'>
                        <Prices />
                    </div>
                </div>
            </div>
        </div>
        {cfg.ENTRIES_OPEN &&
            <EntryForm
                {...props}
                price={eventPrice + merchandisePrice}
                setMerchandisePrice={setMerchandisePrice}
                setSelectedEventName={setSelectedEventName}
                selectedEventName={selectedEventName}
            />
        }
    </div>
}


export default Enter;