import { useRouter } from "next/router";
import { getEventById } from "../../DUMMY_DATA";

import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";
const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const eventObj = getEventById(eventId);
  console.log(eventObj);
  return (
    <>
      <EventSummary title={eventObj.title} />
      <EventLogistics
        date={eventObj.date}
        address={eventObj.location}
        image={eventObj.image}
        imageAlt={eventObj.title}
      />
      <EventContent>
        <p>{eventObj.description}</p>
      </EventContent>
    </>
  );
};
export default EventDetailPage;
