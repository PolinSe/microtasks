import React from 'react';
import './App.css';
import {LessonMap} from "./01-map/LessonMap";
import {LessonButton} from "./02-button/LessonButton";
import {LessonButtonUniversal} from "./02-button/LessonButtonUniversal";
import {LessonUseState} from "./03-useState/LessonUseState";
import {LessonFilter} from './04-filter/LessonFilter';
import {LessonInput} from './05-input/LessonInput';
import {LessonDeepCopy} from './06-deepcopy/LessonDeepCopy';




function App() {

    return (
        <div className="App">
            <LessonMap/>
            <LessonButton/>
            <LessonButtonUniversal/>
            <LessonUseState/>
            <LessonFilter/>
            <LessonInput/>
            <LessonDeepCopy/>
        </div>
    );
}

export default App;
