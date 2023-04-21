import { createContext, useState } from 'react'

//interfaces
import { IMarkedEventsContext } from '../ts/interfaces/events.interfaces'
import { ILoadedEvents } from '../ts/interfaces/events.interfaces'

//types
import { ChildrenPropsType } from '../ts/types/childrenProps.types'

const markedEventsContext = createContext<IMarkedEventsContext>({
    marked: [],
    numberOfMarked: 0,
    addMarked: (markedEvent: ILoadedEvents) => {},
	removeMarked: (eventId: string) => {},
	eventIsMarked: (eventId: string) => {}
})

export const MarkedEventsContextProvider = (props: ChildrenPropsType) => {
    const [markedEvents, setMarkedEvents] = useState([])

    const addMarkedHandler = (markedEvent: IMarkedEventsContext) => {
        setMarkedEvents((prevMarkedEvent: any) => {
            return prevMarkedEvent.concat(markedEvent)
        })
        return;
    }

    const removeMarkedHandler = (eventId: string) => {
        setMarkedEvents((prevMarkedEvent: any) => {
            return prevMarkedEvent.filter((event: ILoadedEvents) => event._id !== eventId);
        })
    }

    const eventIsMarkedHandler = (eventId: string) => {
        return markedEvents.some((event: ILoadedEvents) => event._id === eventId)
    }

    const context = {
        marked: markedEvents,
        numberOfMarked: markedEvents.length,
        addMarked: addMarkedHandler,
        removeMarked: removeMarkedHandler,
        eventIsMarked: eventIsMarkedHandler
    }
    return (
        <markedEventsContext.Provider value={context}>
            {props.children}
        </markedEventsContext.Provider>
    )
}

export default markedEventsContext