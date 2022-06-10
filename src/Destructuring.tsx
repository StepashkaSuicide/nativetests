import React from "react";


type LessonsType = {
    title: string
}
type addressType = {
    street: StreetType1
}
type StreetType1 = {
    title: string
}


export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: addressType
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {}
}


export const ManComponent: React.FC<PropsType> = ({title, man}) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                <div>{man.name}</div>
            </div>
        </div>
    )
}