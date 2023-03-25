import styles from './task.module.scss.js'
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
        <tr className={styles.taskRow} onDoubleClick={() => setTaskToEdit(task)}>
            <td onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
                {title}
                <Tooltip title={title} start={startDate} end={endDate} showTip={showTip}/>

            </td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            {weeksInQuarter &&
                weeksInQuarter.map((weeks, i) => {
                    return (
                        <td className={styles.taskWeeksRow} key={v1()}>
                            {weeks.map((weekNumber, j) => {
                                const className = allWeeksAndYears?.some(el => el.week === weekNumber.week && el.year === weekNumber.year) ? `${styles.activeCell} ${styles.cell}` : styles.cell
                                const skipLastBorderRight = (i === weeksInQuarter.length - 1) && (j === weeks.length - 1) && {
                                    borderRight: '0',
                                    backgroundColor: 'blue'
                                }
                                return <td style={skipLastBorderRight} key={v1()} className={className}/>
                            })}
                        </td>
                    )
                })}
        </tr>
    )
})