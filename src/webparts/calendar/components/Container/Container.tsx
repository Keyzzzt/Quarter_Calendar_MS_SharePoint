import s from './container.module.scss'
import * as React from 'react'

interface Props {
    children: React.ReactNode
}

export const Container: React.FC<Props> = ({children}) => {
    return (
        <main className={s.container}>
            {children}
        </main>
    )
}
