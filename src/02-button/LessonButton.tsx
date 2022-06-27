import React, {MouseEvent}  from "react";

export function LessonButton() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! Im VASYA!')
    // }
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement >) => {
    //     console.log('Hello! Im IVAN!')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    return (
        <div>
            {/*<button onClick={(event) => {console.log('Hello!')}}>MyTouTubeChanel-1</button>*/}

            <button onClick={() => onClickHandler('VASYA')}>MyTouTubeChanel-1</button>
            <button onClick={() => onClickHandler('IVAN')}>MyTouTubeChanel-2</button>

        </div>
    )
}