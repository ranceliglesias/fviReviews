import React from 'react'
import ReviewList from './facebookList'
import fbPayload from './fbPayload'

const token = 'EAACbrcvyUC4BAJ4WKf87mP2QoexDQswoNiINIFBIr47uwccqHjmuWoFXpIZA6UbTBdFcRCbtxIz1AVIM6Hw2iH2kVhV26AbJdMihlv7SZBPkO2i67iVVbdYu14MCvW583OzeYjKOsPM90OXcAbzHSdQ2S9z0G7GJyAiATfUAZDZD'

export default React.createClass({

getInitialState(){

    return{
      reviews: [],

  }
},

componentWillMount(){
  this.fbReviews();
},

fbReviews(){

    // FB.api(
    //   // `/746661705385761/ratings?access_token=${token}`, //leotheLion page
    //   `/702254009919090/ratings?access_token=${token}`, //FVI page
    //   'GET',
    //   {},
    //   function(response) {
    //     getReviews(response.data)// recieving payload..good
    //     console.log(response.data,'recieving payload', )
    //   },
    // );
    //
    //    const getReviews = (d) =>{
    //
    //      this.setState({reviews: d})
    //      //  const ids = ({d}).map(i=>d.reviewer.id)
    //
    //    }
    this.setState({reviews: fbPayload})

},

render (){

  return(

    <div>

      <ReviewList reviews={this.state.reviews} />

    </div>

  )
}
})
