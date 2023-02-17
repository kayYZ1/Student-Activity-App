import React from 'react'

import classes from "./SingleEvent.module.css"

type Props = {
    id: string,
    image: string,
    title: string,
    address: string,
    description: string,
    hour: string,
    date: string
}

const SingleEvent = (props: Props) => {
    return (   
        <div className={classes.eventItem}>
            <div className={classes.event}>
                <div className={classes.eventImage}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.eventContent}>
                    <h2 className={classes.eventTitle}>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <h4>{props.date} | {props.hour}</h4>
                    <p className={classes.eventDescription}>{props.description}</p>
                    <button className={classes.eventBtn}>I want to participate</button>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent