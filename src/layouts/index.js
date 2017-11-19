import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from '../img/backyard_logo.svg';

import './index.css'

const Header = () => (
  <header role="banner" aria-label="Primary">
    <Link to="/" className="logo">
      <img className="logo" src={logo} alt="logo"/>
    </Link>
    <MainNavigation />
  </header>
)

const MainNavigation = () => (
  <nav role="navigation" aria-label="Primary" className="nav-primary">
    <ul>
      <li><Link to="#home">home</Link></li>
      <li><Link to="#about">about</Link></li>
      <li><Link to="#gallery">gallery</Link></li>
      <li><Link to="#jettyroad">jetty road</Link></li>
      <li><Link to="#missjazz">lil' miss jazz</Link></li>
      <li><Link to="#soul">soul</Link></li>
      <li><Link to="#contact">contact</Link></li>
    </ul>
  </nav>
)

const SocialIcons = () => (
  <nav role="navigation" aria-label="Secondary">
    <ul>
      <li><Link to="https://www.facebook.com/events/123320368347704/?acontext=%7B%22ref%22%3A%223%22%2C%22ref_newsfeed_story_type%22%3A%22regular%22%2C%22feed_story_type%22%3A%2222%22%2C%22action_history%22%3A%22null%22%7D">Facebook</Link></li>
    </ul>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    <Helmet
      title="The Backyard Sessions"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
