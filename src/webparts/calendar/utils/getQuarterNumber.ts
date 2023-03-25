// Returns quarter number(1 - 4) according to month number(1 - 12)
export const getQuarterNumber = (monthNumber: number): number => {
    if (monthNumber <= 3) return 1
    if (monthNumber > 3 && monthNumber <= 6) return 2
    if (monthNumber > 6 && monthNumber <= 9) return 3
    return 4
}