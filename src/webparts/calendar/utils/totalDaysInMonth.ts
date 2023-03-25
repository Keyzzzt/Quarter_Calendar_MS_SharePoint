// Returns number of days in particular month and year
export const getDaysInMonth = function (month: number, year: number): number {
    return new Date(year, month, 0).getDate()
}