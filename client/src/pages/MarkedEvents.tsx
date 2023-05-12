import { useContext, Fragment } from "react";

import markedEventsContext from "../context/markedEventsContext";
import EventsList from "../components/events/EventsList";

const MarkedEvents = () => {
  const markedEventCtx = useContext(markedEventsContext);

  console.log(markedEventCtx);

  if (markedEventCtx.numberOfMarked < 1) return <p>Nothing here yet</p>;
  else {
    return (
      <Fragment>
        <h1>Events that you're interested in...</h1>
        <h3>
          Current number of marked events: {markedEventCtx.numberOfMarked}
        </h3>
        <EventsList events={markedEventCtx.marked} />
      </Fragment>
    );
  }
};

export default MarkedEvents;
