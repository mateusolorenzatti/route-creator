import React, { Component } from "react";
import MapGL from "react-map-gl";

const TOKEN = "pk.eyJ1IjoibWF0ZXVzb2xvcmVuemF0dGkiLCJhIjoiY2toODEzd3dkMDZodTJ5cGY4OGI1eXEwMSJ9.J5MvepB63To_4Pr-51qMXQ";

class Map extends Component {

    state = {
        viewport: {
            latitude: -29.226622,
            longitude: -51.348123,
            zoom: 13,
            bearing: 0,
            pitch: 0
        },
        width: '100%',
        height: 500
    };

    render() {
        return (
            <MapGL
                width={this.state.width}
                height={this.state.height}
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={TOKEN}
                onViewportChange={viewport => this.setState({ viewport })}
            />
        );
    }
}

const MapBox = () => (
    <div class="container">
        <div class="card">
            <Map />
        </div>
    </div>
);

export default MapBox;