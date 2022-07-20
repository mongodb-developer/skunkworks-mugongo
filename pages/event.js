import { connectToDatabase } from "../util/mongodb";

export default function Events({ Events }) {
  return (
    <div>
      <h1>Top 20 Events of All Time</h1>
      <p>
        <small>(According to MUG's)</small>
      </p>
      <ul>
        {Events.map((event) => (
          <li>
            <h2>{event.Title}</h2>
            <h3>{event.Topics}</h3>
            <p>{event.Date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const Events = await db
    .collection("event")
    .find({})
    .limit(20)
    .toArray();

  return {
    props: {
      Events: JSON.parse(JSON.stringify(Events)),
    },
  };
}
