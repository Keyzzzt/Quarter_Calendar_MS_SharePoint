import * as React from 'react'
import s from './button.module.scss'

type ButtonProps = {
    type: 'success' | 'danger' | 'close'
    value: string
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = React.memo(({type, value, onClick}) => {
    console.log('Button   render')
    const className = type === 'success'
        ? s.success
        : type === 'danger'
            ? s.danger
            : s.close
    return (
        <input onClick={onClick} className={className} type="button" value={value}/>
    )
})
