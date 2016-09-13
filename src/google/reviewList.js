import React from 'react'

// reviewList (Componente Secundario)
export default React.createClass({
  _getList(){
    // console.log(this.props.reviews, 'from reviewList');
    return this.props.reviews.map(e=>{
      // Date
      const date = new Date()
      const minutes = date.getMinutes()
      const hours = date.getHours()

      //Mostrar las estrellas
      var totalStart = [];
      for (var i = 0; i < e.rating; i++) {
        totalStart.push((<span key={i}className="icon"><i className="fa fa-star" aria-hidden="true"></i></span>));
      }
      return(
        <div key={e.time} style={styles} className="container">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  {e.profile_photo_url ? <img src={e.profile_photo_url} alt="Image"/> : <img src='https://tracker.moodle.org/secure/attachment/30912/f3.png' alt="Image"/>}
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <div>
                    <strong>{e.author_name}</strong><small>&nbsp;&nbsp;&nbsp;&nbsp;{(hours+ 24) % 12 || 12}:{minutes}</small>
                    <br/>
                    {e.text}
                  </div>
                  {totalStart}
                </div>
              </div>
            </article>
            </div>
        </div>
      )
    })
  },
  render (){
    return <div>{this._getList()}</div>
  }
})

const styles = {
  padding: 10
}
