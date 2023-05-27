// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        {isSubscribe ? (
          <button type="button" className="button">
            Subscribed
          </button>
        ) : (
          <button type="button" className="button">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
