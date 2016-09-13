import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
import {spy} from 'sinon'
import $ from 'jquery'
import YelpReviews from '../src/yelp/yelpReviews'
import YelpList from '../src/yelp/yelpList'
import OAuth from '../src/yelp/OAuth'


describe('Payloads', function (){

    it('Calls xomponent will mount ', ()=>{
      spy(YelpReviews.prototype, 'componentWillMount');
      const wrapper = mount(<YelpReviews />);
      expect(YelpReviews.prototype.componentWillMount.calledOnce).to.equal(true);
    })


    it('should receive payload with the right keys', done=>{

      const consumerKey = "vBjqc9wkl8Gxsf-QeF4ydA"
      const consumerSecret = "nRgk2K9x6EpZ1kYZzBVHmmo2ibE"
      const accessToken = "7H6Ye4DpHR9lErOmrESQSqlD3vMBZr3m"
      const accessTokenSecret = "DjDZUOZhR44wa0OfuTH8WKxVtm8"
      const signatureMethod = "HMAC-SHA1"


      const accessor = {
          consumerSecret : consumerSecret,
          tokenSecret : accessTokenSecret
      }

      const parameters = [
        ['callback', 'cb'],
        ['oauth_consumer_key', consumerKey],
        ['oauth_consumer_secret', consumerSecret],
        ['oauth_token', accessToken],
        ['oauth_signature_method', 'HMAC-SHA1']
      ]


      const message = {
          'action' : 'https://api.yelp.com/v2/business/florida-vocational-institute-miami',
          'method' : 'GET',
          'parameters' : parameters
      }

      OAuth.setTimestampAndNonce(message);
      OAuth.SignatureMethod.sign(message, accessor);

      const parameterMap = OAuth.getParameterMap(message.parameters);

      $.ajax({
          'url' : message.action,
          'data' : parameterMap,
          'dataType' : 'jsonp',
          'jsonpCallback' : 'cb',
          'cache': true,
          'success': d=>{
                  try {
                    expect(Object.keys(d)).to.eql([
                    'is_claimed',
                    'rating',
                    'mobile_url',
                    'rating_img_url',
                    'review_count',
                    'name',
                    'rating_img_url_small',
                    'url',
                    'categories',
                    'reviews',
                    'phone',
                    'image_url',
                    'location',
                    'display_phone',
                    'rating_img_url_large',
                    'id',
                    'is_closed'

                    ])
                    done()
                  } catch (e) {
                    done(e)
                  }


          }
      })

    });



    it("Should Render YelpList Child", function() {
      const wrapper = shallow(<YelpReviews/>);
      const child = wrapper.find(YelpList);
      expect(child).to.exist
    });

});
