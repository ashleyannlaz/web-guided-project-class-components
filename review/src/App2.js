import React from 'react'

// const Person = (props) => {
//     return(
//     <div>
//     <h1>Hello, {props.name}!</h1>
//     <h2>Are you {props.age}?</h2>
//     </div>
//     );
// }

class Person extends React.Component {
    render(){
            return(
            <div>
            <h1>Hello, {this.props.name}!</h1>
            <h2>Are you {this.props.age}?</h2>
            <p>Come on in the waters fine.</p>
            </div>
            );
    }
}

class App2 extends React.Component {
    constructor() { 
        //call constructor to access all options
        super();
        this.state = {
            // basically like using useState
            name: 'Ashley',
            age: 29
        }
    }
    handleClick = () => {
        this.setState({
            ...this.state,
            // ensures it keeps all old values
            name: 'Emma',
            age: 3
        }
        )
    }

    render () {
        const name = 'Ashley';
        return(
            <div>
                <Person name={this.state.name} age={this.state.age} />
                <button onClick={this.handleClick}>Change the name.</button>
            </div>
        )
    }
    
}

export default App2;