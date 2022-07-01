import React, {useState} from "react";
import {NewComponentFilter} from './NewComponentFilter';

export type FilterType = 'all' | 'rubles' | 'dollars'

export const LessonFilter = () => {
    let [money, setMoney] = useState([
        {banknots: 'dollars', value: 100, number: ' a1234567890'},
        {banknots: 'dollars', value: 50, number: ' z1234567890'},
        {banknots: 'rubles', value: 100, number: ' w1234567890'},
        {banknots: 'dollars', value: 100, number: ' e1234567890'},
        {banknots: 'dollars', value: 50, number: ' c1234567890'},
        {banknots: 'rubles', value: 100, number: ' r1234567890'},
        {banknots: 'dollars', value: 50, number: ' x1234567890'},
        {banknots: 'rubles', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'rubles') {
        currentMoney = money.filter(el => el.banknots === 'rubles')
    }
    if (filter === 'dollars') {
        currentMoney = money.filter(el => el.banknots === 'dollars')
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponentFilter onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
        </>
    )
}