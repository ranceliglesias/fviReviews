import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'

import GoogleButton from '../src/google/GoogleButton'
import YelpButton from '../src/yelp/yelpButton'
import FacebookButton from '../src/facebookButton.js'

Feature('Review buttons',

`Make it as effortless as possible for students to review fvi.edu.
    The review sites are google, facebook and yelp.
    For more information see the attached 'online_review.pdf' document provided by the client.\n`,


 ()=>{

  Scenario('User wants to review fvi.edu with yelp',()=>{
    const wrapper = shallow(<YelpButton/>)

    Given('the yelp button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span>Review FVI on Yelp</span>
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
    	expect(wrapper.find('a').simulate('click')).to.be.ok
    })


    Then('the user should be directed to the yelp review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a href='https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg' className='button is-danger is-large'>
            <span className="icon"><i className="fa fa-yelp"></i></span>
            <span>Review FVI on Yelp</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </div>
      )).to.equal(true)
    })

  })



  Scenario('User wants to review fvi.edu with facebook',()=>{

    const wrapper = shallow(<FacebookButton/>)

    Given('the facebook button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span>Review FVI on Facebook</span>
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
    	expect(wrapper.find('a').simulate('click')).to.be.ok
    })

    Then('the user should be directed to the facebook review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a href='https://www.facebook.com/FloridaVocationalInstitute/reviews'
            className='button is-info is-large'>
            <span className="icon"><i className="fa fa-facebook"></i></span>
            <span>Review FVI on Facebook</span>
          </a>
        </div>
      )).to.equal(true)
    })

  })


  Scenario('User wants to review fvi.edu with google',()=>{

    const wrapper = shallow(<GoogleButton/>)

    Given('the google button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span className="icon"><i className="fa fa-google"></i></span>
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
      expect(wrapper.find('a').simulate('click')).to.be.ok
    })

    Then('the user should be directed to the google review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a className='button is-danger is-large' href='https://plus.google.com/105289039757508765516'>
            <span className="icon"><i className="fa fa-google"></i></span>
            <span>Review FVI on Google</span>&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </div>
      )).to.equal(true)
    })
  })

})
