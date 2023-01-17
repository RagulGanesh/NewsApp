import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 
export default class App extends Component {  
  pageSize=6;
  countryVar="in";
  apiKey=process.env.REACT_APP_NEWS_API;

  render() {  
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route  exact path="/" element={<News key="general" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="general"/>}/>          
          <Route  exact path="/business" element={<News key="business" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="business"/>}/>        
          <Route  exact path="/entertainment" element={<News key="entertainment" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="entertainment"/>}/>          
          <Route  exact path="/general" element={<News key="general" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="general"/>}/>        
          <Route  exact path="/health" element={<News key="health" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="health"/>}/>          
          <Route  exact path="/science" element={<News key="science" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="science"/>}/>          
          <Route  exact path="/sports" element={<News  key="sports" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="sports"/>}/>          
          <Route  exact path="/technology" element={<News key="technology" api={this.apiKey} pageSize={this.pageSize} country={this.countryVar} category="technology"/>}/>          
        </Routes>        
        </Router>
      </div>
      
    )
  }
}


