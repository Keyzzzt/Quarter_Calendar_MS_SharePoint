import {parseDateString} from './parseDateString'
import {totalDaysInYear} from './totalDaysInYear'
import {getDaysInMonth} from './totalDaysInMonth'
import {WeekType} from '../components/Main/Main'
// This function returns an array of WeekType, where weeks and years correspond to task dates
// This task weeks/years we will compare to quarter weeks/years to mark weeks that are matching
export const getWeeksAndYearsForTask = (startDate: string, endDate: string): WeekType[] => {
    const {startYear, startMonth, startDay, endYear, endMonth, endDay} = parseDateString(startDate, endDate)
    const yearsDiff = endYear - startYear
    const totalDaysAndYear: { year: number, totalDays: number }[] = []

    if (yearsDiff) {
        // Create an array with number of days in every year [365, 366, 365, etc.]
        const years: number[] = []
        for (let i = 0; i <= yearsDiff; i++) {
            years.push(totalDaysInYear(startYear + i))
        }
        // Loop through that array
        for (let i = 0; i < years.length; i++) {
            if (i === 0) {
                let daysFromYearStartToTaskStart = 0
                for (let i = startMonth; i <= 12; i++) {
                    daysFromYearStartToTaskStart += getDaysInMonth(i, startYear)
                }
                totalDaysAndYear.push({
                    year: startYear,
                    totalDays: daysFromYearStartToTaskStart - (startDay - 1)
                })
            } else if (i === years.length - 1) {
                let daysFromYearStartToTaskEnd = 0
                for (let i = 1; i < endMonth; i++) {
                    daysFromYearStartToTaskEnd += getDaysInMonth(i, startYear)
                }
                totalDaysAndYear.push({
                    year: endYear,
                    totalDays: daysFromYearStartToTaskEnd + endDay
                })
            } else {
                totalDaysAndYear.push({year: endYear - (yearsDiff - i), totalDays: years[i]})
            }
        }
        const weeksAndYears: WeekType[] = []
        for (let i = 0; i < totalDaysAndYear.length; i++) {
            if(i === 0) {
                const counter = Math.ceil(totalDaysAndYear[i].totalDays / 7)
                for (let j = 0; j < counter; j++) {
                    weeksAndYears.push({week: 52 - j, year: totalDaysAndYear[i].year})
                }
            } else {
                const counter = Math.ceil(totalDaysAndYear[i].totalDays / 7)
                for (let j = 1; j <= counter; j++) {
                    weeksAndYears.push({week: j, year: totalDaysAndYear[i].year})
                }
            }

        }
        return weeksAndYears
    } else {
        let startWeek: number = 0
        let endWeek: number = 0
        let daysFromYearStartToTaskStart = 0
        let daysFromYearStartToTaskEnd = 0

        for (let i = 1; i < startMonth; i++) {
            daysFromYearStartToTaskStart += getDaysInMonth(i, startYear)
        }
        startWeek = Math.ceil((daysFromYearStartToTaskStart + startDay) / 7)
        for (let i = 1; i < endMonth; i++) {
            daysFromYearStartToTaskEnd += getDaysInMonth(i, endYear)
        }
        endWeek = Math.ceil((daysFromYearStartToTaskEnd + endDay) / 7)

        const weeksAndYears: WeekType[] = []
        for (let i = 0; i <= endWeek - startWeek; i++) {
            weeksAndYears.push({week: startWeek + i, year: endYear})
        }
        return weeksAndYears
    }
}