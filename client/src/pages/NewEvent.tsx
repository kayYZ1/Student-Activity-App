import React, { FormEvent, useRef } from 'react'

import classes from "./styles/NewEvent.module.css"

type Props = {
}

const NewEvent = (props: Props) => {
	const titleInputRef = useRef<HTMLInputElement>(null);
	const addressInputRef = useRef<HTMLInputElement>(null);
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
	const urlInputRef = useRef<HTMLInputElement>(null);
	const timeInputRef = useRef<HTMLInputElement>(null);
	const dateInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		//post request to http://localhost:5000/api/events/add
	}

	return (
		<div className={classes.newEventContainer}>
			<form onSubmit={submitHandler}>
				<h2>Add a new student activity/event idk</h2>
				<input type="text" name="title" placeholder="Add an interesting title." required ref={titleInputRef}/>
				<input type="text" name="address" placeholder="Meetup address." required />
				<textarea name="description" placeholder="Short description on what's going to happen." required/>
				<input type="url" name="img" placeholder="Url of that points at a image of the place you plan to go to." required/>
				<input type="time" name="hour" placeholder="Hour of the meeting." required/>
				<input type="date" name="date" placeholder="Date of the meeting" required/>
				<input type="button" name="btn" className={classes.addEventBtn} value="Add" />
			</form>
		</div>
	)
}

export default NewEvent