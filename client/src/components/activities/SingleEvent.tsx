import { useContext } from 'react'

import markedEventsContext from '../../store/markedEventsContext'

import classes from "./SingleEvent.module.css"

type Props = {
    _id: string,
    image: string,
    title: string,
    address: string,
    description: string,
    hour: string,
    date: string
}

const SingleEvent = (props: Props) => {
    console.log(props)
    const markedEventsCtx = useContext(markedEventsContext)

    const markedEvent = markedEventsCtx.eventIsMarked(props._id)

    const toggleMarkedHandler = () => {
        if (markedEvent) {
            markedEventsCtx.removeMarked(props._id)
        }
        else {
            markedEventsCtx.addMarked({
                _id: props._id,
                image: props.image,
                title: props.title,
                address: props.address,
                description: props.description,
                hour: props.hour,
                date: props.date
            })
        }
    }

    const systemDate = new Date().toISOString();
    return (
        <div className={classes.eventItem}>
            <div className={classes.event}>
                <div className={classes.eventImage}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.eventContent}>
                    <h2 className={classes.eventTitle}>{props.title}</h2>
                    <h3>{props.address}</h3>
                    {systemDate > props.date ?
                        <div>
                            <h4 className={classes.isExpired}> {props.date} | {props.hour} </h4>
                            <p className={classes.eventDescription}>{props.description}</p>
                            <button className={classes.eventBtnExpired} disabled>Event expired</button>
                        </div> :
                        <div>
                            <h4> {props.date} | {props.hour} </h4>
                            <p className={classes.eventDescription}> {props.description}</p>
                            <button className={classes.eventBtn} onClick={toggleMarkedHandler}>{markedEvent ? "Remove from marked" : "Add to your marked list"}</button>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default SingleEvent