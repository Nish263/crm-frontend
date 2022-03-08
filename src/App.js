import React from "react";
import "./App.css";
import { DefaultLayout } from "./components/layout/DefaultLayout";

import { Entry } from "./pages/Entry/Entry.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>//Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
