import React from 'react'
import {render} from 'react-dom'
import AppContainer from '../src/AppContainer'





const Index = React.createClass({
  render (){
    return(
      <AppContainer/>
    )
  }
})



render(<Index/>, document.getElementById('root'))
