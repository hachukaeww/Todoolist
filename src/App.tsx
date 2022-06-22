import React from 'react';
import './App.css';
import {Toodolist} from './Toodolist';

 function App() {
    return (
        <div className="App">
       <Toodolist title="What to lern"/>
       <Toodolist title="Movie"/>
        </div>
    );
}

export default App;
