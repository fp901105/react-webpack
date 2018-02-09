import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
        return (
            <header id="fh5co-header" role="banner">
                <div className="container">
                    <div className="header-inner">
                        <h1>
                            <i className="sl-icon-energy"></i>
                            <a href="index.html">ATE</a>
                        </h1>
                        <nav role="navigation">
                            <ul>
                                <li>
                                    <a className="active" href="index.html">Home</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Page 1-1</a></li>
                                        <li><a href="#">Page 1-2</a></li>
                                        <li><a href="#">Page 1-3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/wfd/1'>WFD</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
module.exports = {Header};