import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import PostForm from './components/PostForm';
import CommentForm from './components/CommentForm';
import PostDetail from './components/PostDetail';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/new/:type" component={PostForm}/>
          <Route path="/edit/:post_id" component={PostForm}/>
          <Route path="/detail/:post_id/comments" exact component={PostDetail}/>
          <Route path="/detail/:post_id/comments/new" component={CommentForm}/>
        </Switch>
      </Router>
    </>
  );
}