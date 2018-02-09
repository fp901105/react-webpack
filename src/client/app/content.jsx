import React, {Component} from 'react'
import ReactAudioPlayer from 'react-audio-player';

class Header extends Component {
    render() {
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
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="portfolio.html">Portfolio</a>
                                </li>
                                <li>
                                    <a href="services.html">Services</a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:null,
            index: 0
        }

        this.chooseCategory = this.chooseCategory.bind(this);

    }

    chooseCategory(){
        console.log(this.state.index);
        console.log(this);
    }

    render() {
        var buttonArray = [];
        for(var i=0;i<376;i++){
            buttonArray.push(<button type="button" key ={i} class="btn btn-secondary" onClick={this.chooseCategory}>{i}</button>)
        }
        let buttons = buttonArray.map((button,i) =>{
            this.setState({index:i})
            return button;
        })
        return (
            <div>
                <Header/> 
                <div class="btn-group mr-2" role="group" aria-label="First group">
                {buttons}
                </div>
            </div>
        );
    }
}

export default Content;