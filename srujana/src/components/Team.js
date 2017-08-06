import React from 'react';
import '../assets/team.css';

export default function Team() {
  return (
    <div className="container">
      <div className="heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>OUR TEAM</h2><hr className="orange" />
        </div>
      </div>
      <div className="row">
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Ashish Desai</h3>
            <hr className="yellow" />
          </div>
        </div>
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Rathin Mehta</h3>
            <hr className="yellow" />
          </div>
        </div>
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Jagadish Christian</h3>
            <hr className="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
}
