import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
      super();
      this.displayData = [];
      this.state = {
        showdata : this.displayData,
        postVal : "",
        no_buttons: 0,
      }
      this.appendData = this.appendData.bind(this);
      this.generateButtons = this.generateButtons.bind(this);
      this.reply_click = this.reply_click.bind(this);
  };

  reply_click(clicked_id) {
    if (clicked_id == this.no_winning_button) {
       alert("Congratulations, you won!");
       this.no_winning_button = Math.floor(Math.random() * this.state.no_buttons); 
    } else {
      alert("Oops, wrong button pressed.\nDon't give up!!")
    }
    this.no_winning_button = Math.floor(Math.random() * this.state.no_buttons);
    return clicked_id;
  }

  appendData() {
    this.displayData.push(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
    this.setState({
      showdata : this.displayData,
      postVal : ""
    });
  }

  generateButtons() {
    this.displayData = []
    var no_buttons = document.getElementById("noButtons").value;
    this.state.no_buttons = no_buttons
    this.no_winning_button = Math.floor(Math.random() * this.state.no_buttons);
    if (no_buttons <= 1) {
      alert("Sorry, you have to add at least two buttons!");
    } else {
      var i;
        for (i = 1; i <= no_buttons; i++) {
          this.appendData();
        }
    }
  }

  render() {
    var buttons = this.displayData;
    var self = this;
    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form id="form">
              <div className="flex-wrapper">
                <h1> Guess the button! </h1>
              </div>
              <div>
                <p> In this game you have to guess which is the winning button. Good luck! </p>
              </div>
              <div>
                <p className="noButtons"> Number of buttons: <input type="text" id="noButtons" name="noButtons" className="form-control"/></p>
                <button type="button" className="btn btn-success" onClick={e => this.generateButtons()} >Generate buttons</button>
              </div>
            </form>
          </div>
          <div id="list-wrapper">
            {buttons.map(function(button, index){
              return(
                 <div className="button-wrapper flex-wrapper">
                    <button id={index} onClick={e => self.reply_click(e.target.id)} type="button" className="btn btn-primary">I am the winner!</button>
                 </div>
              )}
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;