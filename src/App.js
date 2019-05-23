import React from 'react';
import Card from './components/Card'
import Table from './layouts/Table' 
import './App.css';
import contactsJSON from './contacts.json'

class App extends React.Component {

  constructor() {
    super()
    this.handleDeleteContactClick = this.handleDeleteContactClick.bind(this)
  }

  state = {
    contactsJSON: contactsJSON,
    contacts: contactsJSON.slice(0, 5)
  };

  handleAddRandomContactClick = () => {   
    let newcontactsJSON = [...this.state.contactsJSON.slice(6)] //duplicate array starting from 6th element to avoid duplicate in random contact
    let newRandomContact = newcontactsJSON[Math.floor(Math.random() * newcontactsJSON.length)];
    let currentState = [...this.state.contacts]
    currentState.push(newRandomContact);
    this.setState({ contacts: currentState });
  };

  handleSortNameClick = () => { 
    let currentState = [...this.state.contacts]
    currentState.sort((a, b) => a.name.localeCompare(b.name)) 
    this.setState({ contacts: currentState });
  };

  handleSortPopularityClick = () => {
    let currentState = [...this.state.contacts]
    currentState.sort((a, b) => b.popularity - a.popularity)
    this.setState({ contacts: currentState });
  };

  handleDeleteContactClick(key) {
    let updatedContacts = [...this.state.contacts];
    updatedContacts.splice(key, 1);
    debugger
    this.setState({
      contacts: updatedContacts
    })
  };

  render() {

    let rowJSX = this.state.contacts.map( (contact, index) => {
      console.log(index)
      return ( <Card {...contact} key={index} index={index} deleteContact={this.handleDeleteContactClick} />)
    })

    return (
      <div className="App">

        <button onClick={this.handleAddRandomContactClick}>Add Random Contact</button>
        <button onClick={this.handleSortNameClick}>Sort by Name</button>
        <button onClick={this.handleSortPopularityClick}>Sort by Popularity</button>
     
        <Table key="table">{rowJSX}</Table>
        
      </div>
    );
  }
}

export default App;
