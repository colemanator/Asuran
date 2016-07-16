/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p> Hello React!</p>;
    }
}

render(<App/>, document.getElementById('app'));