// create your App component here
import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {data: ""}
    }
    render(){
        return(
            <div>
              <p>{this.state.data}</p>
            </div>
        )
    }

    componentDidMount(){
        return fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => {
            this.setState({data: data})
        })
    }
}