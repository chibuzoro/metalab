import {DateTime} from "luxon";

export const humanReadableDates = (date) => {
    const dateSource = DateTime.fromISO(date);
    const relativeTime = dateSource.toRelative();
    const message = 'Updated ';

    if (['month', 'year'].filter(
        (unit) => relativeTime.includes(unit)).length
    ) {
        return message + 'on ' + dateSource.toFormat('LLL dd, yyyy')
    }

    return message + relativeTime;
}
