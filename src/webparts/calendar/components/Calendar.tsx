import * as React from 'react'
import styles from './Calendar.module.scss'
import {ICalendarProps} from './ICalendarProps'
// import {escape} from '@microsoft/sp-lodash-subset'
import {Main} from './Main/Main' // Get to know escape method

export const Calendar: React.FC<ICalendarProps> = ({
                                                       description,
                                                       isDarkTheme,
                                                       environmentMessage,
                                                       hasTeamsContext,
                                                       userDisplayName
                                                   }) => {

    return (
        <section className={`${styles.calendar} ${hasTeamsContext ? styles.teams : ''}`}>
            <Main />
               </section>
    )
}
