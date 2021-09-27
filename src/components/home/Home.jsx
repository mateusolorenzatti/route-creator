import React from 'react';

import Navbar from '../common/Navbar';
import MapBox from '../mapbox/MapBox';

function Home() {

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          Header
        </div>
      </div>

      <MapBox />
    </div>
  );
}

export default Home;
