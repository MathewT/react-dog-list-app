import React, { Component } from 'react';
import './App.css';
import './Dog/DogButton.css';
import Dog from './Dog/Dog.js';

class App extends Component {

  state = {
    otherState: "some other state data",
    switchedNameCount: 0,
    showDogsToggle: true,
    dogs: [
      { 
        id: "asdfa",
        name: "Kirby", 
        age: 6,
        breed: "best"
      },
      { 
        id: "werwe",
        name: "Greta", 
        age: 5,
        breed: "cute"
      },
      { 
        id: "kdfjdkj",
        name: "Hotshot", 
        age: 9,
        breed: "tough"
      }
    ]
  };
  
  
  deleteDogHandler = (index) => {
    console.log(`deleting ${this.state.dogs[index].name}`);
  };
  
  toggleDogsHandler = () => {
    let showDogs = this.state.showDogsToggle;
    this.setState(
      {
        showDogsToggle: !showDogs
      }
    );
  };
  
  nameChangedHandler = (event, id) => {
    // console.log(`nameChangedHandler called for id: ${id}, ${event.target.value}`);
    console.log(`nameChangedHandler called for id: ${id}, ${event.target.value}`);
    
    let dogIndex = this.state.dogs.findIndex(dog => {
      return dog.id === id;
    })
    
    // Wrong.  Don't do this.  dogs is a pointer to live state data.  Bad. Never mutate state directly.
    // const dog = this.state.dogs[dogIndex];
    
    const dog = {
      ...this.state.dogs[dogIndex]
    };
    
    console.log(`change name of ${dog.name}`);
    dog.name = event.target.value;
    let dogsCopy = [...this.state.dogs];
    dogsCopy[dogIndex] = dog;
    this.setState({dogs: dogsCopy});
  };
  
  renderDogs = () => {
    let dogs = null;
    if (this.state.showDogsToggle)  {
      dogs = (
        <div>
          {
            this.state.dogs.map((dog, index) => {
              return (
                <Dog
                  key={dog.id}
                  name={dog.name}
                  age={dog.age}
                  breed={dog.breed}
                  // nameChangedHandler={this.nameChangedHandler.bind(this, event. dog.id)}
                  nameChangedHandler={(event) => this.nameChangedHandler(event, dog.id)}
                  deleteClick={this.deleteDogHandler.bind(this, index)} />
              )
            })
          }
        </div>
      );
    }
    return (
      dogs
    );
  };
  
  getDogButtonStyle() {
    if(this.state.showDogsToggle) {
      return "dogButtonStyleGreen";
    } else {
      return "dogButtonStyleRed";
    }
  };
  
  render() {
    let dogButtonStyle = this.getDogButtonStyle();
    let dogs = this.renderDogs();
    return (
      <div className="App">
        <h3>hello, world</h3>
        <button className={dogButtonStyle}  onClick={this.toggleDogsHandler}>Toggle Dogs List</button>
        {dogs}
      </div>
    );
  };
}

export default App;
