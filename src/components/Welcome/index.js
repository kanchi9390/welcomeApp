import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribed = () => {
    this.setState({isSubscribe: false})
  }

  onSubscribe = () => {
    this.setState({isSubscribe: true})
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        {isSubscribe ? (
          <button type="button" className="button" onClick={this.onSubscribed}>
            Subscribed
          </button>
        ) : (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
