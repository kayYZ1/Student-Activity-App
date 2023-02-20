import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import * as Yup from 'yup';

import classes from "./styles/NewEvent.module.css"

const currDate = new Date().toISOString();

const validationSchema = Yup.object().shape({
	title: Yup.string().min(2, "Too short").max(15, "Too long").required(),
	address: Yup.string().min(2, "Too short").max(50, "Too long").required(),
	description: Yup.string().min(2, "Too short").max(30, "Too long").required(),
	image: Yup.string().required().matches(/(https?:\/\/.*\.(?:png|jpg))/i, "Image url has to be valid."),
	hour: Yup.string().required(),
	date: Yup.date().required().min(currDate, "Date has to be valid")
});

const NewEvent = () => {
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			title: "",
			address: "",
			description: "",
			image: "",
			hour: "",
			date: ""
		}, validationSchema: validationSchema, onSubmit: (values) => {
			axios.post("http://localhost:5000/api/events/add", values)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
			navigate("/");
		}
	})

	return (
		<div className={classes.newEventContainer}>
			<form onSubmit={formik.handleSubmit}>
				<h2>Add a new student activity/event idk</h2>
				<input value={formik.values.title} name="title" onChange={formik.handleChange} type="text" placeholder="Short title..." />
				{formik.errors.title && formik.touched.title ? (
					<div>{formik.errors.title}</div>
				) : null}

				<input value={formik.values.address} name="address" onChange={formik.handleChange} type="text" placeholder="Address..." />
				{formik.errors.address && formik.touched.address ? (
					<div>{formik.errors.address}</div>
				) : null}

				<input value={formik.values.description} name="description" onChange={formik.handleChange} type="text" placeholder="Description..." />
				{formik.errors.description && formik.touched.description ? (
					<div>{formik.errors.description}</div>
				) : null}

				<input value={formik.values.image} name="image" onChange={formik.handleChange} type="url" placeholder="Url that points at image..." />
				{formik.errors.image && formik.touched.image ? (
					<div>{formik.errors.image}</div>
				) : null}

				<input value={formik.values.hour} name="hour" onChange={formik.handleChange} type="time" />
				{formik.errors.hour && formik.touched.hour ? (
					<div>{formik.errors.hour}</div>
				) : null}

				<input value={formik.values.date} name="date" onChange={formik.handleChange} type="date" />
				{formik.errors.date && formik.touched.date ? (
					<div>{formik.errors.date}</div>
				) : null}

				<input type="submit" name="btn" className={classes.addEventBtn} value="Add" />
			</form>
		</div>
	)
}

export default NewEvent