import { getAllEvents } from "../../DUMMY_DATA";
import EventList from "../../Components/Events/event-list";
const AllEvents = () => {
  const events = getAllEvents();
  return (
    <>
      <EventList items={events} />
    </>
  );
};

export default AllEvents;
