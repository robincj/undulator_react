import DayJS from 'react-dayjs';

export const DateFormat = (props) => {
    let format = props.format;
    // Replace a single 'S' with a month day suffix 'st', 'nd' or 'th' as appropriate.
    const day = new Date(props.children).getDate();
    let suffix = "[th]";
    switch (day) {
        case 1: case 21: case 31: suffix = '[st]'; break;
        case 2: case 22: suffix = '[nd]'; break;
        case 3: case 23: suffix = '[rd]'; break;
    }

    if (/[^S]S[^S]/.test(format)) {
        format = format.replace(/([^S])S([^S])/, `$1${suffix}$2`)
    }

    const formatProps = { ...props, format };

    return <DayJS {...formatProps}>{props.children}</DayJS>
};

export default DateFormat;