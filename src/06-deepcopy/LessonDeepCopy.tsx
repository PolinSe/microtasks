import React from 'react';

type ObjectType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type FilterValuesType = "all" | "active" | "completed";


const todo: Array<ObjectType> = [
    {
        title: "What to learn",
        filter: "all",
        tasks: [
            {taskId: 1, title: "HTML&CSS", isDone: true},
            {taskId: 2, title: "JS", isDone: true}
        ],
        students: [
            'Rick Kane',
            'Finnlay Bentley',
            'Samia North',
        ]
    },
    {
        title: "What to do",
        filter: "all",
        tasks: [
            {taskId: 3, title: "HTML&CSS2", isDone: true},
            {taskId: 4, title: "JS2", isDone: true}
        ],
        students: [
            'Jago Wormald1',
            'Saul Milne2',
            'Aariz Hester3',
            'Dion Reeve4',
        ]
    }
]

// 1. функция, удаляющая из массива объект todolist
function removeTodolist(todolistId: number) {
    return todo.filter((el, index, array) => index !== todolistId)
}
console.log(removeTodolist(0))
console.log(removeTodolist(1))

// 2. функция, удаляющая таску из массива тасок tasks
function removeTask(taskId: number, todolistId: number) {
    return todo.map((el, index) =>
        index === todolistId
            ? {...el, tasks: [...el.tasks.filter((elem) => elem.taskId !== taskId)]}
            : el)
}
console.log(removeTask(3, 1))
console.log(removeTask(1, 0))

// 3. функция, добавляющая таску в массив тасок tasks
function addTask(title: string, todolistId: number) {
    const newTask = {taskId: 5, title: title, isDone: false}
    return todo.map((el, index) => index === todolistId
        ? {...el, tasks: [newTask, ...el.tasks]}
        : el)
}
console.log(addTask('xxx', 1))

// 4. функция, меняющая статус таски isDone в массиве тасок
function changeStatus(taskId: number, isDone: boolean, todolistId: number) {
    return todo.map((el, index) => index === todolistId
        ? {...el, tasks: el.tasks.map(el => el.taskId === taskId ? {...el, isDone: isDone} : el)}
        : el
    )
}
console.log(changeStatus(2, false, 0))


export const LessonDeepCopy = () => {

    return (
        <div>
            --------------------
            <p>Lesson6 - for results watch console</p>
            --------------------
        </div>
    )
}