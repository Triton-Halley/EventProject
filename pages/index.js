import { getFeaturedEvents } from "../DUMMY_DATA";
import EventList from "../Components/Events/event-list";
function Home() {
  const featuredEvents = getFeaturedEvents();

  // console.log(featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Home;
