import React from 'react'

export default React.createClass({
  render (){
    const url = 'https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg'
    return(
      <div>
        <a href={url} className='button is-danger is-large'>
          <span className="icon"><i className="fa fa-yelp"></i></span>
          <span>Review FVI on Yelp</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
      </div>
    )
  }
})
