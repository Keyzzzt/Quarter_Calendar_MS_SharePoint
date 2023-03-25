// Returns date(number) of first monday in a year
export const getFirstMondayDate = (year: number): number => {
    const daysInWeek = 7
    let firstMonday = 0
    for (let i = 1; i <= daysInWeek; i++) {
        const day = new Date(year, 0, i)
        const weekday = day.toString().split(' ')[0]
        if (weekday === 'Mon') {
            firstMonday = i
            break
        }
    }
    return firstMonday
}

