type ParseDateStringReturnType = {
    startYear: number
    startMonth: number
    startDay: number
    endYear: number
    endMonth: number
    endDay: number
}

export const parseDateString = (startDate: string, endDate: string): ParseDateStringReturnType => {
    const startArr = startDate.split('-')
    const endArr = endDate.split('-')

    const startYear = Number(startArr[0])
    const startMonth = Number(startArr[1])
    const startDay = Number(startArr[2])

    const endYear = Number(endArr[0])
    const endMonth = Number(endArr[1])
    const endDay = Number(endArr[2])
    return {
        startYear,
        startMonth,
        startDay,
        endYear,
        endMonth,
        endDay,
    }
}