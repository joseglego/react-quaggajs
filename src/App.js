import React, { Component } from 'react';
import Scanner from './Scanner';
import Result from './Result';


class App extends Component {

  state = {
    scanning: false,
    results: []
  }

  _scan = () => {
    console.log("this",this)
    this.setState({scanning: !this.state.scanning});
  }

  _onDetected = (result) => {
    this.setState({results: this.state.results.concat([result])});
  }

  render() {
    return (
      <div>
          <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
          <ul className="results">
            {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
          </ul>
          {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
      </div>
    )
  }

}

export default App;