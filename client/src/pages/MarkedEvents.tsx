import { useContext, Fragment } from 'react'

import markedEventsContext from '../store/markedEventsContext'
import EventsList from '../components/activities/EventsList'

type Props = {}

const MarkedEvents = (props: Props) => {
    const markedEventCtx = useContext(markedEventsContext)

    if (markedEventCtx.numberOfMarked === 0) return <p>Nothing here yet</p>
    else {
        return (
            <Fragment>
                <h1>Events that you're interested in...</h1>
                <h3>Current number of marked events: {markedEventCtx.numberOfMarked}</h3>
                <EventsList events={markedEventCtx.marked}/>		
		    </Fragment>
        )	
    }
}

export default MarkedEvents