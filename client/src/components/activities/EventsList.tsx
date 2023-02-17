import React from 'react'

import SingleEvent from './SingleEvent'

import { ILoadedEventsList } from '../additionals/events.interfaces'

import classes from "./EventsList.module.css"

const EventsList = (props: ILoadedEventsList) => {
  return (
    <div className={classes.viewEventsMain}>
      <ul className={classes.events}>
          {props.events.map(event => 
              <SingleEvent
                  key={event.id}
                  id={event.id}
                  image={event.image} 
                  title={event.title} 
                  address={event.address} 
                  description={event.description}
                  hour={event.hour}
                  date={event.date}
              />
          )}
      </ul>
    </div>
  )
}

export default EventsList