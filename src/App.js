import React, { Component } from 'react';
import cars from './data/cars.json'

class CarItem extends Component {
  render() {
    const { car, id } = this.props

    return (
      <li>
        <p><strong>ID : </strong>{ id }</p>
        <p><strong>Nombre : </strong>{ car.name }</p>
        <p><strong>Marca : </strong>{ car.company }</p>
      </li>
    )
  }
}

class App extends Component {
  render() {
    return (
     <div className = "App">
       <h4>Trabajando con listas con objetos</h4>
      <ul>
        {
          cars.map( car => {
            return <CarItem 
                    id = { car.id } 
                    key = { car.id } 
                    car = { car }
                  />
          })
        }
      </ul>
     </div>
    );
  }
}

export default App;

/*
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
  contenido del App
        <div className="App">
          <ConditionalSection/>
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Hola desde props"/>
          <Text 
          arrayOfNumbers = { [2, 3, 4] }
          objectWithInfo = { { key: 'value', key2: 'value2' } }
          boolean = { true }
          multiply = { (number) => number * 4 }
          number = { 2 } 
          text = 'texto en string'
          title = { <h1> Titulo. </h1> }
          />
        </div>
      </div>
  
  demas contenido
  class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const { 
      arrayOfNumbers, 
      multiply,
      objectWithInfo,
      title
    } = this.props;

    const mappedNumbers = arrayOfNumbers.map(this.props.multiply);

    return (
      <div>
        { title }
        <p>{ this.props.text }</p>
        <p>{ this.props.number }</p>
        <p>{ JSON.stringify(this.props.boolean ) }</p>
        <p>{ this.props.arrayOfNumbers.join(', ') }</p>
        <p>{ mappedNumbers.join(', ') }</p>
        <p>{ this.props.objectWithInfo.key2 }</p>
      </div>
    );
  }
}
*/