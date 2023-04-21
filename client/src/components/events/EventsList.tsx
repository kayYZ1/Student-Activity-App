import SingleEvent from './SingleEvent'

import { ILoadedEventsList } from "../../ts/interfaces/events.interfaces"

import { Events, ViewEvents } from "../../styles/events/components.style"

const EventsList = (props: ILoadedEventsList) => {
  return (
    <ViewEvents>
      <Events>
          {props.events.map(event => 
              <SingleEvent
                  key={event._id}
                  _id={event._id}
                  image={event.image} 
                  title={event.title} 
                  address={event.address} 
                  description={event.description}
                  hour={event.hour}
                  date={event.date}
              />
          )}
      </Events>
    </ViewEvents>
  )
}

export default EventsList