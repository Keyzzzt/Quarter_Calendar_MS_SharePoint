import s from './task.module.scss'
import {v1} from 'uuid'
import * as React from 'react'
import {Tooltip} from '../Tooltip/Tooltip'
import {TaskType, WeekType} from '../Main/Main'

type TaskProps = {
    task: TaskType
    setTaskToEdit: (task: TaskType) => void
    allWeeksAndYears: WeekType[]
}

export const Task: React.FC<TaskProps> = React.memo(({task, setTaskToEdit, allWeeksAndYears}) => {
    // console.log('Task   render')
    const {title, startDate, endDate, weeksInQuarter} = task
    const [showTip, setShowTip] = React.useState(false)
    return (
        <tr className={s.taskRow} onDoubleClick={() => setTaskToEdit(task)}>
            <td onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
                {title}
                <Tooltip title={title} start={startDate} end={endDate} showTip={showTip}/>

            </td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            {weeksInQuarter &&
                weeksInQuarter.map((weeks, i) => {
                    return (
                        <td className={s.taskWeeksRow} key={v1()}>
                            <div className={s.wrapper}>
                                {weeks.map((weekNumber, j) => {
                                    const className = allWeeksAndYears?.some(el => el.week === weekNumber.week && el.year === weekNumber.year) ? s.activeCell : s.cell
                                    const skipLastBorderRight = (i === weeksInQuarter.length - 1) && (j === weeks.length - 1) && {
                                        borderRight: 0
                                    }
                                    return <div style={{...skipLastBorderRight}} key={v1()} className={className}/>
                                })}
                            </div>
                        </td>
                    )
                })}
        </tr>
    )
})