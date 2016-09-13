import React from 'react'
import YelpButton from './yelp/yelpButton'
import FacebookButton from './facebook/facebookButton.js'
import GoogleButton from './google/GoogleButton'
import YelpReviews from './yelp/yelpReviews'
import FacebookReviews from './facebook/facebookReviews'
import ReviewBox from './google/reviewBox'


export default React.createClass({

  render (){
    return(




      <div className='is-flex' style={styles.app}>

        <div  className="is-flex" style={styles.nav}>
          <a href="#">
            <img height='60' src="http://www.fvi.edu/wp-content/themes/fvi/images/fvi-logo.png"/>
          </a>

          <div style={{margin:10}}className="message is-primary container">
            <div className="message-header">
              Current Rating:
            </div>
            <div className="message-body" >

              <span className="icon"><i className="fa fa-star" aria-hidden="true"></i></span>
              <span className="icon"><i className="fa fa-star" aria-hidden="true"></i></span>
              <span className="icon"><i className="fa fa-star" aria-hidden="true"></i></span>
              <span className="icon"><i className="fa fa-star" aria-hidden="true"></i></span>
              <span className="icon"><i className="fa fa-star" aria-hidden="true"></i></span> &nbsp;
              <span>4.7 stars </span>
              <div>
                <progress className="progress is-success" value="90" max="100">90%</progress>
              </div>
            </div>
          </div>
        </div>
        <div  className='is-flex' style={styles.content}>
          <hr/>
          <div style={styles.button}>

            <GoogleButton/>
          </div>
          <hr/>
          <div className='is-flex' style={styles.button}>
            <div style={{margin:5}}><FacebookButton/></div>
            <div style={{"margin":5}}><YelpButton/></div>
          </div>

          <hr/>
          <div className='container' style={{width:'100%', margin:30}}>
          <h1 className="subtitle is-3">Most Recent Reviews from Facebook, Google, and Yelp:</h1>
          </div>


          <div>
            <ReviewBox/>

          </div>




          <div>
            <FacebookReviews />
          </div>


          <div>
            <YelpReviews />
          </div>



        </div>
      </div>
    )
  }
})

const styles = {
  app:{
    flexDirection: 'column',
    // height: '100vh',
  },
  nav:{
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor: 'white',
    flex: 1,
  },
  content:{
    flex:8  ,
    alignItems:'center',
    justifyContent:'center',

    flexDirection: 'column',


  },
  button:{
    flexWrap: 'wrap',

    justifyContent:'center',
    flexDirection: 'row',

  }
}
