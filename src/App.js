import React from "react";
import "./App.css";
import { DefaultLayout } from "./components/layout/DefaultLayout";
// import { Dashboard } from "./pages/Entry/dashboard/Dashboard.page";
// import { AddTicket } from "./pages/new-ticket/AddTicket.page";

// import { Entry } from "./pages/Entry/Entry.page";
// import { TicketList } from "./pages/ticket-list/TicketList.page";
import { Ticket } from "./pages/ticket/Ticket.page";
function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
