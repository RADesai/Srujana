import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/nav.css';

export default function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 col-xs-12 text-center links">
          <Link to="/about"><div className="col-xs-2 col-md-offset-1 nav">
            <h5>Srujana</h5> { /* Link to AboutComponent */ }
          </div></Link>
          <Link to="/events"><div className="col-xs-2 nav">
            <h5>Events</h5> { /* Link to EventsComponent */ }
          </div></Link>
          <Link to="/"><div className="col-md-2 col-xs-4 home text-center">
            <img src="https://image.ibb.co/b9zFFk/sargana_logo_ENG_1.png" alt="sargana_logo_ENG_1" className="homeLogo" />
          </div></Link>
          <Link to="/team"><div className="col-xs-2 nav">
            <h5>Team</h5> { /* Link to TeamComponent */ }
          </div></Link>
        <Link to="/contact"><div className="col-xs-2 nav">
            <h5>Contact</h5> { /* Link to ContactComponent */ }
          </div></Link>
        </div>
      </div>
    </div>
  );
}
