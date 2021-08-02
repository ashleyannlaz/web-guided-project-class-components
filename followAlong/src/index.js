import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Tortillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super(); // extending something
    this.state = { // define state
      groceries:groceries //pass in the array
      // name: value
    }
  }

  toggleItem = id => {
    // console.log(id);
    // set state for groceries with id's purchase flipped
    this.setState({
    ...this.state.groceries,
    groceries: this.state.groceries.map(item => {
      if (item.id === id) {
        return ({
          ...item,
          purchased: !item.purchased
        })
      } else {
        return item
      }
    })
    });
  }

  handleAddItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      purchased: false
    }

    this.setState({
      groceries: [...this.state.groceries, newItem]
    })
  }

  handleClear = () => {
    //filter through groceries
    //remove all groceries where purchased === true
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter(item => {
        return(item.purchased === false);
      })
    })
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem} />
         </div>
        <GroceryList toggleItem={this.toggleItem} 
                     groceries={this.state.groceries} 
                     handleClear={this.handleClear}// passed in groceries array from state
         />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);