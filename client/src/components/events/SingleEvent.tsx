import { useContext } from "react";

import markedEventsContext from "../../context/markedEventsContext";

import { SingleEventTypeProps } from "../../ts/types/event.types";

import {
  Event,
  EventButton,
  EventButtonExpired,
  EventContent,
  EventDescription,
  EventItem,
  Image,
  IsExpired,
  EventTitle,
} from "../../styles/events/components.style";

const SingleEvent = (props: SingleEventTypeProps) => {
  const markedEventsCtx = useContext(markedEventsContext);

  const markedEvent = markedEventsCtx.eventIsMarked(props._id);

  const toggleMarkedHandler = () => {
    if (markedEvent) {
      markedEventsCtx.removeMarked(props._id);
    } else {
      markedEventsCtx.addMarked({
        _id: props._id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
        hour: props.hour,
        date: props.date,
      });
    }
  };

  const systemDate = new Date().toISOString();
  return (
    <EventItem>
      <Event>
        <div>
          <Image src={props.image} alt={props.title} />
        </div>
        <EventContent>
          <EventTitle>{props.title}</EventTitle>
          <h3>{props.address}</h3>
          {systemDate > props.date ? (
            <div>
              <IsExpired>
                {" "}
                {props.date} | {props.hour}{" "}
              </IsExpired>
              <EventDescription>{props.description}</EventDescription>
              <EventButtonExpired disabled>Event expired</EventButtonExpired>
            </div>
          ) : (
            <div>
              <h4>
                {" "}
                {props.date} | {props.hour}{" "}
              </h4>
              <EventDescription> {props.description}</EventDescription>
              <EventButton onClick={toggleMarkedHandler}>
                {markedEvent ? "Remove from marked" : "Add to your marked list"}
              </EventButton>
            </div>
          )}
        </EventContent>
      </Event>
    </EventItem>
  );
};

export default SingleEvent;
