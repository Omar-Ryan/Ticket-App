import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <DeleteBlock id={3} />
      <PriorityDisplay />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
