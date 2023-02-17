import React, { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import classes from "./styles/NewEvent.module.css"

type Props = {
}

const NewEvent = (props: Props) => {
	const navigate = useNavigate();
	const titleInputRef = useRef<HTMLInputElement>(null);
	const addressInputRef = useRef<HTMLInputElement>(null);
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
	const urlInputRef = useRef<HTMLInputElement>(null);
	const timeInputRef = useRef<HTMLInputElement>(null);
	const dateInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: FormEvent) => {
		event.preventDefault()

		const payload = {
			title: titleInputRef.current!.value,
			address: addressInputRef.current!.value,
			description: descriptionInputRef.current!.value,
			image: urlInputRef.current!.value,
			hour: timeInputRef.current!.value,
			date: dateInputRef.current!.value,
		}

		axios.post("http://localhost:5000/api/events/add", payload)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		navigate("/");
	}

	return (
		<div className={classes.newEventContainer}>
			<form onSubmit={submitHandler}>
				<h2>Add a new student activity/event idk</h2>
				<input type="text" name="title" placeholder="Add an interesting title." required ref={titleInputRef} />
				<input type="text" name="address" placeholder="Meetup address." required ref={addressInputRef} />
				<textarea name="description" placeholder="Short description on what's going to happen." required ref={descriptionInputRef} />
				<input type="url" name="img" placeholder="Url of that points at a image of the place you plan to go to." required ref={urlInputRef} />
				<input type="time" name="hour" placeholder="Hour of the meeting." required ref={timeInputRef} />
				<input type="date" name="date" placeholder="Date of the meeting" required ref={dateInputRef} />
				<input type="submit" name="btn" className={classes.addEventBtn} value="Add" />
			</form>
		</div>
	)
}

export default NewEvent