import React from 'react'

export default React.createClass({


  reviewList(){
    console.log()
    return this.props.reviews.map(function(r){

      const totalStars = [];
      for (var i = 0; i < r.rating; i++) {
        totalStars.push((<span key={i.toString()} className="icon is-small"><i className="fa fa-star" aria-hidden="true"></i></span>))
      }



      return (

        <div key={r.created_time} className="box container">
          <article className="media">

              <div className="media-left">
              <figure className="image is-64x64">
                <img src='https://tracker.moodle.org/secure/attachment/30912/f3.png' alt="Image"/>
              </figure>
              </div>


            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{r.reviewer.name}</strong> &nbsp; <small>{r.created_time.substring(0, 10)}</small>
                  <br/>
                  {r.review_text? r.review_text: 'No comment given'}
                </p>
              </div>
              <nav className="level">
              <div className="level-left">
                <a className="level-item">
                  {totalStars}
                </a>

              </div>
              </nav>
            </div>
          </article>
        </div>



      )

    })
  },


  render(){
    return(
        <div>

        {this.reviewList()}

        </div>


    )
  }
})

const styles = {
  container:{
    fontSize: '20',
    padding: '10px',
    margin: '10px',
  },

  box: {
    margin: '30px'
  }


}
