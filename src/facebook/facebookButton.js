import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'

export default React.createClass({
  render (){
    return(
      <div>
        <a href='https://www.facebook.com/FloridaVocationalInstitute/reviews'
          className='button is-info is-large'>
          <span className="icon"><i className="fa fa-facebook"></i></span>
          <span>Review FVI on Facebook</span>
        </a>
      </div>
    )
  }
})
