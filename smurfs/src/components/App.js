import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import { connect } from 'react-redux'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.error && <h2 className="error">Error: {this.props.error}</h2>}
        {this.props.fetching && <h2 className="loading">Loading</h2>}
        <section className="formatter">
          <SmurfList />
          <SmurfForm/>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error:state.error,
  fetching:state.fetching
})


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
