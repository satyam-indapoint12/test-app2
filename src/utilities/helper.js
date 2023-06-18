import moment from 'moment-timezone';
import { isEmpty } from 'lodash'
import { CafeAvailabilityStatus } from '../enums'
export const getWeekDay = (index) => {
    const arr = ['sun','mon', 'tue', 'wed', 'thurs', 'fri', 'sat']
    return arr[index]
}

export const showCafeAvailability = (currentTiming) => {
    //const zone = "America/Mexico_city"  // set Mexico timezone
    const zone = "Asia/Calcutta"          // set India timezone
    let currentTime = moment().tz(zone).format('HH:mm')
    console.log(currentTime)
    currentTime = moment(currentTime,'HH:mm')
    const { StartTime , EndTime} = currentTiming || {}
    const startTime = moment(StartTime, 'HH:mm');
    const endTime = moment(EndTime, 'HH:mm');
    if(isEmpty(currentTiming)){
        return CafeAvailabilityStatus.holiday
    }
    if (currentTime.isBetween(startTime, endTime)) {
        return CafeAvailabilityStatus.open
    } else {
        return CafeAvailabilityStatus.close
    }
}