import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./SidebarContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormFill from "./FormFill";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Sidebar
          sidebar={<SidebarContent />}
          open={true}
          styles={{ sidebar: { background: "white" } }}
          docked={true}
          sidebarClassName={"sidebar-style"}
        >
          <Route exact path="/fill" component={FormFill} />
        </Sidebar>
      </Router>
    );
  }
}

export default App;
