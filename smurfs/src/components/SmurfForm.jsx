import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clear } from '../actions'

class SmurfForm extends Component {
    state = {
        name:'',
        age:'',
        height:'',
        id:null
    }
    
    edit=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    sub=e=>{
        e.preventDefault()
    }

    empty=e=>{
        this.props.clear()
        this.setState({
            name:'',
            age:'',
            height:'',
            id:null
        })
    }

    render() {
        if(this.props.updating && this.id!=this.props.updating.id){
            this.setState({...this.props.updating})
        }
        return (
            <form onSubmit={this.sub}>
                {this.props.updating && <h2>Updating: {this.name}</h2>}
                <label htmlFor="name">Name: <input type="text" name="name" value={this.state.name} onChange={this.edit}/></label>
                <label htmlFor="age">Age: <input type="number" name="age" value={this.state.age} onChange={this.edit}/></label>
                <label htmlFor="height">Height: <input type="number" name="height" value={this.state.height} onChange={this.edit}/></label>
                <button type="submit">Submit</button>
                <button onClick={this.empty}></button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    updating:state.updating
})

const mapDispatchToProps = {
    clear,

}


export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm)