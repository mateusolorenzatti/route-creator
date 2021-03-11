import React, { Component } from "react";
import Dimensions from "react-dimensions";
import PropTypes from "prop-types";
import { Container } from "./styles";

import MapGL from "react-map-gl";

const TOKEN = "pk.eyJ1IjoibWF0ZXVzb2xvcmVuemF0dGkiLCJhIjoiY2toODEzd3dkMDZodTJ5cGY4OGI1eXEwMSJ9.J5MvepB63To_4Pr-51qMXQ";

class Map extends Component {
    
    static propTypes = {
        containerWidth: PropTypes.number.isRequired,
        containerHeight: PropTypes.number.isRequired
    };

    state = {
        viewport: {
            latitude: -29.226622,
            longitude: -51.348123,
            zoom: 13,
            bearing: 0,
            pitch: 0
        }
    };

    render() {
        const { containerWidth: width, containerHeight: height } = this.props;
        return (
            <MapGL
                width={width}
                height={height}
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={TOKEN}
                onViewportChange={viewport => this.setState({ viewport })}
            />
        );
    }
}

const DimensionedMap = Dimensions()(Map);

const MapBox = () => (
    <div class="container">
        <div class="card">
            <Container height='300px'>
                <DimensionedMap />
            </Container>
        </div>
    </div>
);

export default MapBox;