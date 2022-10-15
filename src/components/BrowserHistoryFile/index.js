// write your code here

import {Component} from 'react'

import SingleItem from '../SingleItem'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistoryFile extends Component {
  state = {searchInput: '', filtered: initialHistoryList}

  getInputData = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  deleteUser = id => {
    const {filtered} = this.state
    const ResultsData = filtered.filter(each => each.id !== id)
    this.setState({filtered: ResultsData})
  }

  render() {
    const {searchInput, filtered} = this.state

    const filteredDataResults = filtered.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    if (filteredDataResults.length === 0) {
      return (
        <div className="Browser-app">
          <nav className="nav-container">
            <img
              className="logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div>
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              className="search-bar"
              type="search"
              placeholder="Search History"
              onChange={this.getInputData}
            />
          </nav>

          <div className="error-container">
            <div className="dom">
              <p className="error">There is no history to show</p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="Browser-app">
        <nav className="nav-container">
          <img
            className="logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div>
            <img
              className="search-icon"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
          </div>
          <input
            className="search-bar"
            type="search"
            placeholder="Search History"
            onChange={this.getInputData}
          />
        </nav>
        <div className="card-container">
          <ul className="history-items-container">
            {filteredDataResults.map(each => (
              <SingleItem
                historyItem={each}
                key={each.id}
                removeSum={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistoryFile
