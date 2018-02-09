/*import React from 'react';
import {render} from 'react-dom';

import Content from './content.jsx';

class App extends React.Component {
  render(){
    return( 
        <div>
            <Content />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Title, List } from './App';
import {Header} from  './header'
import Wfd from './wfd'

ReactDOM.render(
  <Router>
      <div>
        <Route path="/" component={Header} />
        <Route path="/wfd" component={Wfd}/>
      </div>
  </Router>,
  document.getElementById('app')
)

// import React from  'react';
// import ReactDOM from 'react-dom';

// import { HashRouter as Router, Route } from 'react-router-dom';
// import ParamsExample from './example'

// ReactDOM.render(
//   <ParamsExample />,
//   document.getElementById('app')
// )
