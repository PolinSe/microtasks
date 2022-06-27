import React  from "react";
import {Button} from "./Button";

export function LessonButtonUniversal() {
    const Button1Foo=(subscriber: string, age: number, address: string)=>{
        console.log(subscriber, age, address)
    }

    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }

    const Button3Foo=()=>{
        console.log('Im stupid button')
    }


    return (
        <div>
            <h3>Universal buttons</h3>
            <Button name={'MyYouTubeChanel-1'} callBack = {() => {Button1Foo('Im Vasya', 21, 'live in Minsk')}}/>
            <Button name={'MyYouTubeChanel-2'} callBack = {() => {Button2Foo('Im Ivan')}}/>
            <Button name={'Stupid button'} callBack={Button3Foo}/>
        </div>
    )
}