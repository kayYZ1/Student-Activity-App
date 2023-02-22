import { useState, useEffect, Fragment } from 'react'
import axios from "axios"

import Spinner from '../components/utils/Spinner'
import EventsList from '../components/activities/EventsList'

import { ILoadedEvents } from '../components/utils/interfaces/events.interfaces'


type Props = {}

const ViewEvents = (props: Props) => {
	const [loading, setLoading] = useState(false)
	const [loadedEvents, setLoadedEvents] = useState<ILoadedEvents[]>([])

	useEffect(() => {
		setLoading(true)
		axios.get("http://localhost:5000/api/events/view")
			.then(function (response) {
				console.log(response)
				setLoading(false)
				setLoadedEvents(response.data)
			})
			.catch(function (error) {
				console.log(error)
				setLoading(false)
			});
	}, [])

	return (
		<Fragment>
			<h1>Ongoing student's activites</h1>
			{loading ? <Spinner /> : <EventsList events={loadedEvents} />}
		</Fragment>
	)
}

export default ViewEvents