import React from 'react';

import { FaMoon } from "react-icons/fa";

function Navbar() {
    const halfmoon = require("halfmoon");

    return (
        <nav class="navbar navbar-fixed-bottom">
            <div class="navbar-content">

            </div>
            <a href="/" class="navbar-brand">
                Route Creator
        </a>

            <div class="navbar-content ml-auto">
                <button class="btn btn-success"
                    type="button"
                    onClick={() => halfmoon.toggleDarkMode()}>

                    <FaMoon />
                </button>
            </div>

        </nav>
    );
}

export default Navbar;
