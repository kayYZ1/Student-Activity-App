import { createContext, useState } from "react";

//interfaces
import { IMarkedEventsContext } from "../ts/interfaces/events.interfaces";
import { ILoadedEvents } from "../ts/interfaces/events.interfaces";

//types
import { ChildrenPropsType } from "../ts/types/childrenProps.types";

const markedEventsContext = createContext<IMarkedEventsContext>({
  marked: [],
  numberOfMarked: 0,
  addMarked: (markedEvent: ILoadedEvents) => {},
  removeMarked: (eventId: string) => {},
  eventIsMarked: (eventId: string) => {},
});

export const MarkedEventsContextProvider = (props: ChildrenPropsType) => {
  const [markedEvents, setMarkedEvents] = useState([]);

  const markedEventsLocalStorage: any = localStorage.getItem("markedEvents");
  const markedEventsLocalStorageParsed = markedEventsLocalStorage
    ? JSON.parse(markedEventsLocalStorage)
    : [];

  const addMarkedHandler = (markedEvent: IMarkedEventsContext) => {
    setMarkedEvents((prevMarkedEvent: any) => {
      const markedEventsList = prevMarkedEvent.concat(markedEvent);
      localStorage.setItem("markedEvents", JSON.stringify(markedEventsList));
      return markedEventsList;
    });
    return;
  };

  const removeMarkedHandler = (eventId: string) => {
    setMarkedEvents((prevMarkedEvent: any) => {
      const newMarkedEventsList = prevMarkedEvent.filter(
        (event: ILoadedEvents) => event._id !== eventId
      );
      localStorage.setItem("markedEvents", JSON.stringify(newMarkedEventsList));
      return newMarkedEventsList;
    });
  };

  const eventIsMarkedHandler = (eventId: string) => {
    const markedEventsLocalStorage: any = localStorage.getItem("markedEvents");
    const markedEventsLocalStorageParsed = JSON.parse(markedEventsLocalStorage);
    return markedEventsLocalStorageParsed.some(
      (event: ILoadedEvents) => event._id === eventId
    );
  };

  const context = {
    marked: markedEventsLocalStorageParsed,
    numberOfMarked: markedEventsLocalStorageParsed.length,
    addMarked: addMarkedHandler,
    removeMarked: removeMarkedHandler,
    eventIsMarked: eventIsMarkedHandler,
  };
  return (
    <markedEventsContext.Provider value={context}>
      {props.children}
    </markedEventsContext.Provider>
  );
};

export default markedEventsContext;
