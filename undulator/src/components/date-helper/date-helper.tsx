import DayJS from 'react-dayjs';
import dayjs from 'dayjs';

class DateHelper {
    // Given a date, returns the month-day suffix 'st', 'nd' or 'th' as appropriate.
    static monthDaySuffix(date: string) {
        const day = new Date(date).getDate();
        let suffix = "[th]";
        switch (day) {
            case 1: case 21: case 31: suffix = '[st]'; break;
            case 2: case 22: suffix = '[nd]'; break;
            case 3: case 23: suffix = '[rd]'; break;
        }
        return suffix;
    };

    /**
     *  Replace a single 'S' in a format string with a month day suffix 'st', 'nd' or 'th' as appropriate, based on the given date.
     */
    static formatSuffix(format: string, date: string) {
        if (/[^S]S[^S]/.test(format)) {
            const suffix = this.monthDaySuffix(date);
            format = format.replace(/([^S])S([^S])/, `$1${suffix}$2`)
        }
        return format;
    }

    static formatDate(date, format) {
        const formatWithSuffix = this.formatSuffix(format, date);

        return dayjs(date).format(formatWithSuffix);
    }

    static DateFormat(props) {
        // const format = this.formatSuffix(props.format, props.children);
        // const formatProps = { ...props, format };

        return <div>x</div>;
        // return <DayJS {...formatProps}>{props.children}</DayJS>
    };
}

export default DateHelper;