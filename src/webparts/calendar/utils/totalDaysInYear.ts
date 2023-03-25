// Returns number of days in particular year
export const totalDaysInYear = (year: number): number => {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 366 : 365
}