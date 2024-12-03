import React from "react";
import "../styles/TicketCard.css";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <div className="ticket-info">
        <p>
          Status: <span className="status">{ticket.status}</span>
        </p>
        <p>
          Priority:{" "}
          <span className={`priority ${getPriorityClass(ticket.priority)}`}>
            {getPriorityLabel(ticket.priority)}
          </span>
        </p>
        <p>
          Assigned User:
          <div className="user-info">
            <img
              className="user-avatar"
              src={ticket.assigned_user_avatar}
              alt={ticket.assigned_user}
            />
            <span className="assigned-user">{ticket.assigned_user}</span>
          </div>
        </p>
      </div>
    </div>
  );
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    default:
      return "No priority";
  }
};

// Get class for priority color
const getPriorityClass = (priority) => {
  switch (priority) {
    case 4:
      return "urgent";
    case 3:
      return "high";
    case 2:
      return "medium";
    case 1:
      return "low";
    default:
      return "no-priority";
  }
};

export default Ticket;
