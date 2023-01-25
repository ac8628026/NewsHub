import "./App.css";
import React, { Component } from "react";

import News from "./component/News";
import Nav from "./component/Nav";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setProgress({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        
        <Router>
          <Nav />
          
          <Routes>
            
            <Route
              path="/general"
              element={<News apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="general" category="general" pagesize="10" />}
            />
            <Route
              path="/business"
              element={
                <News apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="busniess" category="business" pagesize="10" />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="entertainment"
                  category="entertainment"
                  pagesize="10"
                />
              }
            />
            <Route
              path="/health"
              element={<News apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="health" category="health" pagesize="10" />}
            />
            <Route
              path="/science"
              element={<News apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="science" category="science" pagesize="10" />}
            />
            <Route
              path="/sports"
              element={<News apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="sports" category="sports" pagesize="10" />}
            />
            <Route
              path="/technology"
              element={
                <News apikey="c188cc5d6fb445349c8e9f6cbdc1692c" key="technology" category="technology" pagesize="10" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
