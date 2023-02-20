import React from "react";

export const About = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-7">App description</h1>
      <p className="lead">Main tools which were used to create this little project:</p>
      <ul className="list-group list-group-flush">
        <li className="about-item about-item-1 list-group-item list-group-item-warning">Axios</li>
        <li className="about-item about-item-2 list-group-item">Firebase</li>
        <li className="about-item about-item-3 list-group-item list-group-item-warning">React hooks useContext and useReducer</li>
        <li className="about-item about-item-4 list-group-item">Boootstrap + SASS</li>
        <li className="about-item about-item-5 list-group-item list-group-item-warning">React-transition-group animations</li>
      </ul>
    </div>
  </div>
);
