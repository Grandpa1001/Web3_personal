import React, { Component } from 'react'
import Navbar from 'components/common/navbar/Navbar'
import Home from 'pages/home'
import About from 'pages/about'
import Contact from 'pages/contact'
import NotFoundPage from 'pages/404'
import GlobalStyle from 'styles/Global'
import favicon from './assets/images/MgrGracz.webp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ScrollToTop from 'react-router-scroll-top'

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFoundPage} />
            <Route path="/favicon/MgrGracz.webp" component={favicon} />
          </Switch>
        </ScrollToTop>
        <GlobalStyle />
      </Router>
    )
  }
}

export default App


/*



*/