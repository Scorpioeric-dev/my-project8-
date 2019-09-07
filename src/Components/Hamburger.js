import React, { Component } from 'react'
import Create from './Create'
import About from './About'

export default class Hamburger extends Component {
    state = {

    }
    render() {
        return (
            <div>
               <Create/>
               <About/> 
            </div>
        )
    }
}
