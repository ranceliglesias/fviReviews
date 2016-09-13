import React from 'react'
import ReviewList from './reviewList'

// reviewBox (Componente Principal)
export default React.createClass({
  getInitialState(){
    return {
      reviews:[]
    }
  },

  getPayload(){
    const request = {placeId: 'ChIJ27yqnW642YgRuRXbc_O1jqg'}
    const service = new google.maps.places.PlacesService(map); // map is your map object
      service.getDetails(request, function(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // console.log(place.reviews);
          pullOut(place.reviews);


        }
      })
      const pullOut = reviews => this.setState({reviews: reviews })
    },

    componentWillMount(){
      this.getPayload()
    },

  render(){

    return(
      <div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    )
  }
})
