import React from 'react';
import './App.css';
import {LessonMap} from "./01-map/LessonMap";
import {LessonButton} from "./02-button/LessonButton";
import {LessonButtonUniversal} from "./02-button/LessonButtonUniversal";
import {LessonUseState} from "./03-useState/LessonUseState";


function App() {

    return (
        <div className="App">
            <LessonMap/>
            <LessonButton/>
            <LessonButtonUniversal/>
            <LessonUseState/>
        </div>
    );
}

export default App;
