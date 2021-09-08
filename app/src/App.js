
import './App.css';
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {fetchSuccess, fetchStart} from './actions'

const App = (props) => {
  useEffect(() =>{
    props.dispatch(fetchStart())

    axios.get('https://animechan.vercel.app/api/random')
      .then(res =>{
        console.log(res.data)
        props.dispatch(fetchSuccess(res.data))
      }).catch(err => console.error(err))

  },[])

 const handleClick = () =>{
  props.dispatch(fetchStart())

  axios.get('https://animechan.vercel.app/api/random')
    .then(res =>{
      console.log(res.data)
      props.dispatch(fetchSuccess(res.data))
    }).catch(err => console.error(err))
  }
  return (
    <div className="App">
      <h1>Random Anime Quotes!</h1>
      <div className ='cont'>
        <h2>{props.anime}</h2>
        <h4>{props.character}</h4>
        <p>{props.quote}</p>
      </div>
      <button onClick ={handleClick}>Generate Quote!</button>
    </div>

  );
}
const mapStateToProps = (state) => {

  return ({
    anime: state.anime,
    character:state.character,
    quote:state.quote
  })
};
export default connect(mapStateToProps)(App);
