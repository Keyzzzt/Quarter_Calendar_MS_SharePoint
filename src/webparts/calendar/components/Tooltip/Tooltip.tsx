import * as React from 'react'
import s from './tooltip.module.scss'

interface Props {
    title: string
    start: string
    end: string
    showTip: boolean
}

export const Tooltip: React.FC<Props> = React.memo(({title, start, end, showTip}) => {
    console.log('Tooltip   render')
    const tipClass = showTip ? s.tooltip : s.hide
    return <p className={tipClass}><span>{title}, From: {start}, To: {end}</span></p>
})
