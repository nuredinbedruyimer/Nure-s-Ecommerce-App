import React from "react";
import styles from "../../styles/style";
import EventsCard from "./EventsCard";

const Event = () => {
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Events</h1>
        </div>
        <div className="w-full  grid">
          <EventsCard />
        </div>
      </div>
    </div>
  );
};

export default Event;
