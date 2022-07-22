import { useRouter } from "next/router";
import { getAllEvents } from "../../DUMMY_DATA";
import EventList from "../../Components/Events/event-list";
import EventsSearch from "../../Components/Events/events-search";
const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    console.log(fullPath);
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEvents;
