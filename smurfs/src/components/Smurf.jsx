import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteSmurf, toUpdate } from '../actions';

class Smurf extends Component {
    render() {
        return (
            <div className="smurfCard">
                <h2 className="name">{this.props.name}</h2>
                <ul>
                    <li className="none">Age: {this.props.age}</li>
                    <li className="none">Height: {this.props.height}</li>
                    <button onClick={()=>this.props.deleteSmurf(this.props.id)}>Delete Smurf</button>
                    <button onClick={()=>this.props.toUpdate({...this.props})}>Update Smurf</button>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteSmurf,
    toUpdate
}


export default connect(null, mapDispatchToProps)(Smurf)