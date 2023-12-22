// import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import NewsCom from "./component/NewsCom";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = "012f3ecd1eb548918832f932c1cb4c9f"
  constructor() {
    super();
    this.state = {
      namee: "Light Mode",
      colorr: "black",
      color: 'light',
      button:"dark"
    }
    document.body.style.backgroundColor = "white"
  }
  toggleMode = () => {
    // alert("Hekko")
    if (this.state.color === 'light') {
      this.setState({
        namee: "Dark Mode",
        colorr: "white",
        color: 'dark',
        button:"primary"
      })
      document.body.style.backgroundColor = "grey"
    }
    else {
      this.setState({
        namee: "Light Mode",
        colorr: "black",
        color: 'light',
        button:"dark"
      })
      document.body.style.backgroundColor = "white"
    }
  }
  state = {
    progress: 0
  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }
  // apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <LoadingBar
          color='blue'
          height={3}
          progress={this.state.progress}
        />
        <Router>
          <NavBar color={this.state.color} button={this.state.button} colorrtx={this.state.colorr} namee={this.state.namee} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='/' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='general' />}></Route>
            <Route exact path="/business" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='business' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='business' />}></Route>
            <Route exact path="/general" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='general' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='general' />}></Route>
            <Route exact path="/health" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='health' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='health' />}></Route>
            <Route exact path="/science" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='science' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='science' />}></Route>
            <Route exact path="/sports" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='sports' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='sports' />}></Route>
            <Route exact path="/technology" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='technology' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='technology' />}></Route>
            <Route exact path="/entertainment" element={<NewsCom apikey={this.apikey} setProgress={this.setprogress} key='entertainment' color={this.state.color} colorrtx={this.state.colorr} button={this.state.button} category='entertainment' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
