import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

import { ErrorMessage, NewEventContainer, NewEventTitle, Input, TextArea, Button } from "../styles/events/pages.style";
import { INewEventValues } from "../ts/interfaces/events.interfaces";

const currDate = new Date().toISOString().split("T")[0];

const validationSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too short").max(30, "Too long").required(),
  address: Yup.string().min(2, "Too short").max(50, "Too long").required(),
  description: Yup.string().min(2, "Too short").max(80, "Too long").required(),
  image: Yup.string()
    .required()
    .matches(
      /(https?:\/\/.*\.(?:png|jpg))/i,
      "Url of the image need to have jpg/png extension."
    ),
  hour: Yup.string().required(),
  date: Yup.date()
    .required()
    .min(currDate, "Date has to be greater than current date " + currDate),
});

const NewEvent = () => {
  const navigate = useNavigate();

  const formik = useFormik<INewEventValues>({
    initialValues: {
      title: "",
      address: "",
      description: "",
      image: "",
      hour: "",
      date: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/api/events/add", values)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(values)
      navigate("/");
    },
  });

  return (
    <NewEventContainer>
      <form onSubmit={formik.handleSubmit}>
        <NewEventTitle>Add a new student activity</NewEventTitle>
        <Input
          value={formik.values.title}
          name="title"
          onChange={formik.handleChange}
          type="text"
          placeholder="Title"
        />
        {formik.errors.title && formik.touched.title ? (
          <ErrorMessage>{formik.errors.title}</ErrorMessage>
        ) : null}

        <Input
          value={formik.values.address}
          name="address"
          onChange={formik.handleChange}
          type="text"
          placeholder="Address"
        />
        {formik.errors.address && formik.touched.address ? (
          <ErrorMessage>{formik.errors.address}</ErrorMessage>
        ) : null}

        <TextArea
          value={formik.values.description}
          name="description"
          onChange={formik.handleChange}
          type="text"
          placeholder="Description"
        />
        {formik.errors.description && formik.touched.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}

        <Input
          value={formik.values.image}
          name="image"
          onChange={formik.handleChange}
          type="url"
          placeholder="Image Url"
        />
        {formik.errors.image && formik.touched.image ? (
          <ErrorMessage>{formik.errors.image}</ErrorMessage>
        ) : null}

        <Input
          value={formik.values.hour}
          name="hour"
          onChange={formik.handleChange}
          type="time"
          data-testid="meetingHour"
        />
        {formik.errors.hour && formik.touched.hour ? (
          <ErrorMessage>{formik.errors.hour}</ErrorMessage>
        ) : null}

        <Input
          value={formik.values.date}
          name="date"
          onChange={formik.handleChange}
          type="date"
          data-testid="meetingDate"
        />
        {formik.errors.date && formik.touched.date ? (
          <ErrorMessage>{formik.errors.date}</ErrorMessage>
        ) : null}

        <Button
          type="submit"
          name="btn"
          value="Add"
          role="button"
        />
      </form>
    </NewEventContainer>
  );
};

export default NewEvent;
