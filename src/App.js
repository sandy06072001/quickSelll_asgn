import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(
    () => localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    () => localStorage.getItem("sortBy") || "priority"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const { tickets: fetchedTickets, users: fetchedUsers } = response.data;

        const ticketsData = fetchedTickets;
        const usersData = fetchedUsers;

        setTickets(ticketsData);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Save groupBy and sortBy to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  return (
    <div className="App">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
};

export default App;
