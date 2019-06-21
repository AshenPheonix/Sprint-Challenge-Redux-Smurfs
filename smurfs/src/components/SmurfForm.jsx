import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clear, updateSmurf, addSmurf } from '../actions'

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
        if(this.props.updating){
            this.props.updateSmurf({
                name:this.state.name,
                age:this.state.age,
                height:this.state.height,
                id:this.state.id
            })
            this.empty()
        }else{
            this.props.addSmurf({...this.state})
        }
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

    componentDidUpdate=(prev)=>{
        if(this.props.updating && this.props.updating.id !== this.state.id)
            this.setState({...this.props.updating})
    }

    render() {
        return (
            <form onSubmit={this.sub}>
                {this.props.updating && <h2>Updating: {this.state.name}</h2>}
                <label htmlFor="name">Name: <input type="text" name="name" value={this.state.name} onChange={this.edit}/></label>
                <label htmlFor="age">Age: <input type="number" name="age" value={this.state.age} onChange={this.edit}/></label>
                <label htmlFor="height">Height: <input type="text" name="height" value={this.state.height} onChange={this.edit}/></label>
                <button type="submit">Submit</button>
                <button onClick={this.empty}>Clear Form</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    updating:state.updating
})

const mapDispatchToProps = {
    clear,
    updateSmurf,
    addSmurf
}


export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm)