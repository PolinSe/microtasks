import React, {useState, ChangeEvent} from 'react';

type FullInputType = {
    addMessage: (title: string) => void
}
export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

