import React from 'react';
import '../assets/events.css';

export default function Events() {
  return (
    <div className="container">
      <div className="heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>UPCOMING EVENTS</h2>
          <hr className="orange" />
          <div className="col-md-10 col-md-offset-1 col-xs-12">
            <div className="date">
              <h3>Srujana & TV Asia Present</h3>
              <span className="name">Yugpurush</span> - 06 AUG 2017
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/cfejnF/yugpurush_Logo.jpg" alt="yugpurush_Logo" className="main img-rounded" />
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <h2>Brought to you by:</h2>
          </div>
          <div className="col-md-8 col-md-offset-2 col-xs-12 text-center sponsors">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <div className="sponsor">
                  <img src="https://image.ibb.co/ituAy5/ShopLogo.jpg" className="img-rounded" alt="sponsor-logo"/>
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Rahul & Meena Shukla from SS White Aerospace</h4>
                  <hr className="orange" />
                </div>
                <div className="sponsor">
                  <img src="https://image.ibb.co/cvQYJ5/Screen_Shot_2017_04_26_at_10_31_42_PM.png" alt="Screen_Shot_2017_04_26_at_10_31_42_PM" className="img-rounded" />
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Parikh Network</h4>
                  <hr className="orange" />
                </div>
                <div className="sponsor">
                  <img src="http://image.ibb.co/cpWMak/ED63_ADDB_0772_46_A6_8411_43_F421753845.jpg" alt="ED63_ADDB_0772_46_A6_8411_43_F421753845" />
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Sangita & Pranav Shah</h4>
                  <hr className="orange" />
                </div>
                <div className="sponsor">
                  <h4>Division 10 Inc</h4>
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Maa Siddheshwari Food Corp</h4>
                  <hr className="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>PAST EVENTS</h2><hr className="orange" />
        </div>
      </div>
      <div className="col-md-8 col-md-offset-2 col-xs-12">
        <div className="row">
          <div className="col-md-6 col-xs-12 text-center">
            <div className="date">
              <span className="name">Sangam</span> - 25 MAY 2017
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/kAbUt5/Sangam_postcard_5_x_7_1.jpg" alt="Sangam_postcard_5_x_7_1" className="poster img-rounded" />
            </div>
          </div>
          <div className="col-md-6 col-xs-12 text-center">
            <div className="date">
              <span className="name">Sogaat</span> - 22 NOV 2015
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/nzCxd5/Screen_Shot_2017_04_26_at_10_14_47_PM.png" alt="Screen_Shot_2017_04_26_at_10_14_47_PM" className="poster img-rounded" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xs-12 text-center">
            <div className="date">
              <span className="name">Shabda Sangat</span> - 30 NOV 2014
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/mEnGo5/Shabda_Sangat.gif" alt="Shabda_Sangat" className="poster img-rounded" />
            </div>
          </div>
          <div className="col-md-6 col-xs-12 text-center">
            <div className="date">
              <span className="name">Sur Safar</span> - 16 AUG 2014
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/bFmWMQ/Sur_Safar.png" alt="Sur_Safar" className="poster img-rounded" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xs-12 text-center">
            <div className="date">
              <span className="name">Ashok Dave</span> - 26 APR 2014
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/dLzAy5/Screen_Shot_2017_04_26_at_10_14_08_PM.png" alt="Screen_Shot_2017_04_26_at_10_14_08_PM" className="poster img-rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
