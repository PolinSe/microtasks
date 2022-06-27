import React from "react";
import {NewComponent, students} from "./NewComponent";
import {NewComponentHomeWork, topCars} from "./NewComponentHomeWork";

export function LessonMap() {
    return (
        <>
            <NewComponent students={students}/>
            <NewComponentHomeWork topCars={topCars}/>
        </>
    )
}