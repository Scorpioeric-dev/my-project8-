import React, { Component } from 'react'
import Create from './Create'
import About from './About'

export default class Hamburger extends Component {
    state = {
classes:''
    }
 // hamburger.addEventListener('click', () => {
  //   navLinks.classList.toggle('open')
  //   linkSync.forEach(link => {
  //     link.classList.toggle('fade')
  //   })
  // })
    toggle= () =>{
        this.setState({})
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
