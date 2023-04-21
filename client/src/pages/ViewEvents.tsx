import { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Spinner from "../utils/Spinner";
import EventsList from "../components/events/EventsList";

import { ILoadedEvents } from "../ts/interfaces/events.interfaces";

const ViewEvents = () => {
  const [loading, setLoading] = useState(false);
  const [loadedEvents, setLoadedEvents] = useState<ILoadedEvents[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/events/view")
      .then(function (response) {
        console.log(response);
        setLoading(false);
        setLoadedEvents(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <h1>Ongoing student's activites</h1>
      <h3>
        You can choose the activities you want to currently keep track on, they
        will be added in the marked events page.
      </h3>
      {loading ? <Spinner /> : <EventsList events={loadedEvents} />}
    </Fragment>
  );
};

export default ViewEvents;
