import React, { Component } from 'react'

export const ColorContext = React.createContext()

export default class ColorProvider extends Component {
    state = {
        color : 'seagreen'
    }

    render() {
        return (
           <ColorContext.Provider
             value={{state: this.state}}>
                {this.props.children}
           </ColorContext.Provider>
        )
    }
}

//export { ColorContext }