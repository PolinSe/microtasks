import React from 'react';
import {FilterType} from './LessonFilter';

type currentMoneyType = {
    banknots: string
    value: number
    number: string
}

type objFromMoneyArrType = {
    onClickFilterHandler: (nameButton: FilterType) => void
    currentMoney: Array<currentMoneyType>

}

export const NewComponentFilter = (props: objFromMoneyArrType) => {

    return (
        <div>
            <>
                <ul>
                    {
                        props.currentMoney.map((objFromMoneyArr, index) => {
                            return (
                                <li key={index}>
                                    <span>{objFromMoneyArr.banknots}</span>
                                    <span>{objFromMoneyArr.value}</span>
                                    <span>{objFromMoneyArr.number}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div style={{marginLeft: '35px'}}>
                    <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                    <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
                    <button onClick={() => props.onClickFilterHandler('dollars')}>dollars</button>
                </div>
            </>
        </div>
    )
}