import React from 'react'

export default React.createClass({
  _getList(){

    return this.props.reviews.map(r=>{
      let postTime = new Date(0); // The 0 there is the key, which sets the date to the epoch
      postTime.setUTCSeconds(r.time_created)
      postTime = postTime.toString().substring(0, 15)
      return(
        <div key={r.id} className="box container">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={r.user.image_url} alt="Image"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{r.user.name}</strong> &nbsp; <small>{postTime}</small>
                  <br/>
                  {r.excerpt}
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <img src={r.rating_image_url} alt=""/>
                </div>
              </nav>
            </div>
          </article>
        </div>
      )
    })
  },
  render (){
    return <div style={{margin:20}}>{this._getList()}</div>
  }
})
