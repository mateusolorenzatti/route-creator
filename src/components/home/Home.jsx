import React from 'react';

import Navbar from '../common/Navbar';
import MapBox from '../mapbox/MapBox';

function Home() {

  return (
    <div>
      <Navbar />
      <MapBox />

      <div className="container">
        <div className="card">
          Footer
        </div> 
      </div>
    </div>
  );
}

export default Home;
