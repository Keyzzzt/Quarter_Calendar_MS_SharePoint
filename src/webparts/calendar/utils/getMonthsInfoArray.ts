// Returns array with length 12, with information about each month
import {getDaysInMonth} from './totalDaysInMonth'
import {getFirstMondayDate} from './getFirstMondayDate'
import {v1} from 'uuid'
import {getMonthName} from './getMonthName'
import {getQuarterNumber} from './getQuarterNumber'
import {WeekType} from '../components/Main/Main'

export type monthInfoType = {
    id: string
    month: string
    quarterNumber: number
    restDays: number
    totalDaysInMonth: number
    fullWeeks: number
    weekNumbers?: WeekType[]
}

export const getMonthsInfoArray = (year: number): monthInfoType[] => {
    const monthsInfo = []
    let restDays = 0
    const daysInJanuary = getDaysInMonth(1, year)
    const firstMonday = getFirstMondayDate(year)
    const daysInJanuaryAfterFirstMonday = daysInJanuary - firstMonday
    let fullWeeksInJanuary = Math.floor(daysInJanuaryAfterFirstMonday / 7)
    restDays = daysInJanuaryAfterFirstMonday - fullWeeksInJanuary * 7
    if(firstMonday > 3) {
        fullWeeksInJanuary += 1
    }
    if (restDays > 3) {
        fullWeeksInJanuary += 1
        restDays += -7
    }


    for (let i = 1; i <= 12; i++) {
        if (i === 1) {
            monthsInfo.push({
                id: v1(),
                month: getMonthName(i),
                quarterNumber: getQuarterNumber(i),
                restDays,
                totalDaysInMonth: daysInJanuary,
                fullWeeks: fullWeeksInJanuary, // 4 or 5
            })
        } else {
            const totalDaysInMonth = getDaysInMonth(i, year)
            const daysThisMonthPlusRest = totalDaysInMonth + restDays
            let fullWeeks = Math.floor(daysThisMonthPlusRest / 7)
            restDays = daysThisMonthPlusRest - fullWeeks * 7
            if (restDays > 3) {
                fullWeeks += 1
                restDays += -7
            }

            monthsInfo.push({
                id: v1(),
                month: getMonthName(i), // 1 - 12
                quarterNumber: getQuarterNumber(i), // 1 -4
                restDays, // Days that are not included this month
                totalDaysInMonth, // 28 -31
                fullWeeks, // 4 or 5
            })
        }
    }
    return monthsInfo
}