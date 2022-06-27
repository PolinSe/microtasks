import React from "react";

type topCarType = {
    manufacturer: string
    model: string
}

type NewComponentHomeWorkType = {
    topCars: Array<topCarType>
}
export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

export const NewComponentHomeWork = (props: NewComponentHomeWorkType) => {

    return (
        <table>
            {props.topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <th>
                            {index+1}
                        </th>
                        <th>
                            {car.manufacturer}
                        </th>
                        <th>
                            {car.model}
                        </th>
                    </tr>
                )
            })}
        </table>
    )
}
