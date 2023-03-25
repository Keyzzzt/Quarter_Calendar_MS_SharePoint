// Returns month name as string according to month number (0 - 11)
export const getMonthName = (index: number): string => {
    const monthsName = ['January', 'February', 'March', 'April', 'Mai', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return monthsName[index - 1]
}