import React, {useState} from "react";
import {FullInput} from "./components/FullInput";
import {Input} from './components/Input';
import {Button} from './components/Button';


export const LessonInput = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'LessonInput'}>

            {/*<FullInput addMessage={addMessage}/>*/}
            <div>
                <Input title={title} setTitle={setTitle}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
            </div>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}