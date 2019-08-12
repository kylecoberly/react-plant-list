import React, {Component} from 'react';
import './App.css';

import PlantList from './PlantList.js';

class App extends Component {
    state = {
        plants: [{
            name: "Cactus"
        },{
            name: "Fern"
        },{
            name: "Lemon Tree"
        }]
    }
    render(){
        return (
            <div>
                <h1>Plants</h1>
                <PlantList plants={this.state.plants} />
                <form>
                    <input type="text" placeholder="Enter a plant" />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
        }
}

export default App;
