import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import * as React from 'react'
import s from './addTask.module.scss'

type AddTaskProps = {
    taskName: string
    startDate: string
    endDate: string
    setTaskName: (value: string) => void
    setStartDate: (value: string) => void
    setEndDate: (value: string) => void
    handleAddTask: () => void
    maxCountExceeded: boolean
}

export const AddTask: React.FC<AddTaskProps> = React.memo(({
                                                   taskName,
                                                   startDate,
                                                   endDate,
                                                   setTaskName,
                                                   setStartDate,
                                                   setEndDate,
                                                   handleAddTask,
                                                   maxCountExceeded,
                                               }) => {
    // console.log('AddTask   render')
    return (
        <div className={s.addTask}>
            {maxCountExceeded
                ? (<span>Maximum 10 tasks. Please remove task to add new one.</span>)
                : (
                    <>
                        <Input id="add-task-title" labelTitle="" type="text" value={taskName}
                               handleOnChange={setTaskName} placeholder='Task title'/>
                        <Input id="add-task-start-date" labelTitle="Start date" type="date" value={startDate}
                               handleOnChange={setStartDate}/>
                        <Input id="add-task-end-date" labelTitle="End date" type="date" value={endDate}
                               handleOnChange={setEndDate}/>
                        <Button type="success" value="Add" onClick={handleAddTask}/>
                    </>
                )}
        </div>
    )
})

