import SingleEvent from "@/src/components/events/single-event";
import Image from "next/image";

const SingleEventPage = ({ data }) => {
  return (
    <SingleEvent data = {data}></SingleEvent>
  );
};

export default SingleEventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  console.log(eventData);
  return {
    props: { data: eventData },
  };
}
