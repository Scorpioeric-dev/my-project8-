import React from 'react'

export default function OneCar(props) {
    console.log(props)
    return (
        <div>
            <button onClick={() => props.getOne(props.id)}>get one car</button>
            {props.specificCar.model}
        </div>
    )
}
