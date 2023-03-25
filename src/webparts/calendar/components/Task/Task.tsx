import s from './task.module.scss'
import {v1} from 'uuid'
import * as React from 'react'
import {Tooltip} from '../Tooltip/Tooltip'
import {TaskType} from '../../reducers/tasksReducer'

type TaskProps = {
    task: TaskType
    setTaskToEdit: (task: TaskType) => void
}

export const Task: React.FC<TaskProps> = React.memo(({task, setTaskToEdit}) => {
    console.log('Task   render')
    const [showTip, setShowTip] = React.useState(false)
    return (
        <>
            <tr className={s.taskRow} onDoubleClick={() => setTaskToEdit(task)}>
                <td onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
                    {task.name}
                    <Tooltip title={task.name} start={task.startDate} end={task.endDate} showTip={showTip}/>

                </td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                {task.weeksInQuarter &&
                    task.weeksInQuarter.map((weeks) => {
                        return (
                            <td className={s.taskWeeksRow} key={v1()}>
                                {weeks.map((weekNumber) => {
                                    const className = task.allWeeksAndYears?.some(el => el.week === weekNumber.week && el.year === weekNumber.year) ? `${s.activeWeekCell}` : undefined
                                    return (
                                        <td key={v1()} className={className}></td>
                                    )
                                })}React.
                            </td>
                        )
                    })}
            </tr>
        </>
    )
})