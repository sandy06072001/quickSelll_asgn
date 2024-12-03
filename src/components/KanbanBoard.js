import React from "react";
import Ticket from "./Ticket";
import "../styles/KanbanBoard.css";

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);

  const sortedTickets = sortTickets(groupedTickets, sortBy);

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map((group, index) => (
        <div key={index} className="kanban-column">
          <h2>{group}</h2>
          {sortedTickets[group].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Group tickets based on the selected option
const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((groups, ticket) => {
    const groupKey = getGroupKey(ticket, groupBy);
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(ticket);
    return groups;
  }, {});
};

// Determine the group key based on the groupBy option
const getGroupKey = (ticket, groupBy) => {
  if (groupBy === "status") return ticket.status;
  if (groupBy === "user") return ticket.assigned_user;
  if (groupBy === "priority") return ticket.priority;
  return ticket.status; // Default grouping
};

// Sort tickets based on the selected option
const sortTickets = (groupedTickets, sortBy) => {
  for (const group in groupedTickets) {
    groupedTickets[group].sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority;
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }
  return groupedTickets;
};

export default KanbanBoard;
