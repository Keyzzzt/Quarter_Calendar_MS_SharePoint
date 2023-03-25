import {WeekType} from '../reducers/tasksReducer'
import {monthInfoType} from './getMonthsInfoArray'

type monthInfoTypeWithWeekNumbers = monthInfoType & { weekNumbers: WeekType[] }

export const getWeeksNumbersRelatedToMonth = (obj: monthInfoType[], year: number): monthInfoTypeWithWeekNumbers[] => {
    let weekCounter = 1
    return obj.map((month) => {
        const weeks: WeekType[] = []
        for (let i = weekCounter; i < weekCounter + month.fullWeeks; i++) {
            weeks.push({week: i, year})
        }
        weekCounter += month.fullWeeks
        return {...month, weekNumbers: weeks}
    })
}