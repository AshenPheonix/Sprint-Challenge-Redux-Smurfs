import React, { Component } from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'
import { getSmurfs } from '../actions';
import '../sass/SmurfList.css'

class SmurfList extends Component {

    componentDidMount(){
        this.props.getSmurfs()
    }

    render() {
        return (
            <div className="SmurfList">
                {this.props.smurfs.map(smurf=>(
                    <Smurf
                        key={smurf.id}
                        {...smurf}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    getSmurfs
}


export default connect(mapStateToProps, mapDispatchToProps)(SmurfList)