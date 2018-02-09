import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { HashRouter as Router, Route, Link,Redirect } from "react-router-dom"
// import txt from './text/wfd/script';
import data from '../text/wfd/script.json'
import { parse } from 'url';

class Wfd extends Component{

    constructor (props) {
        super(props)
    
        this.state = {value:0}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.history.push("/wfd/"+event.target.value);
    }

    showText(){
        this.setState(prevState =>{
            show: !prevState.show
        })
    }
    render(){
        var options=[]
        for(var i=1;i<=376;i++){
            options.push(<option key={i} value={i}>{i}</option>)
        }
        let index = options.map((element,index) =>{
            return element;
        })

        return(
        <Router>
            <div className="fh5co-grey-bg-section" id="fh5co-blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Write From Dictation</h2>
                            <Route path="/wfd/:id" component={Child}/>
                            <select value={this.state.value} onChange={this.handleChange}>
                                {index}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
        );
    }
}

class Child extends Component{
    constructor(props){
        super(props)

        this.state = {show:false}
        this.showText = this.showText.bind(this);
    }

    showText(){
        var show = this.state.show
        this.setState({show:!show
        })
    }

    render(){
        const show = this.state.show;
        let dom = null;
        if(show==true){
            dom = <div>
                    <h3>{data[this.props.match.params.id]}</h3>
                    <button onClick={this.showText}>Hide</button>
                  </div>

        }else{
            dom = <div><button onClick={this.showText}>Show</button></div>
        }
        function FormatNumberLength(num) {
            var r = "" + num;
            while (r.length < 3) {
                r = "0" + r;
            }
            return r;
        }
        var index = this.props.match.params.id
        var src = './audio/wfd/'+ FormatNumberLength(index) +'.mp3';
        return(
            <div>
            {dom}
            <ReactAudioPlayer
                src={src}
                controls
                controlsList="nodownload"
            />
            </div>
        )
    }
}


// const Child = ({match},show) =>(
//     show ?(
//     <div>
//         <h3>ID: {match.params.id}</h3>
//         <h3>{data[match.params.id]}</h3>
//     </div>
//     ):(
//         <h3>no</h3>
//     )
// )


export default Wfd;