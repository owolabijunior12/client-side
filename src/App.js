import React, {useEffect, useState} from 'react';
import Login from './component/login';
import Player from './component/Player';
import { getTokenFromResponse } from './component/sportify';
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css';
// import { useDataLayerValue } from './DataLayer';

const spotify  = new SpotifyWebApi();


function App() {
  const [token, setToken] =useState(null);
  // const [{}, dispatch ]=useDataLayerValue();
  useEffect(()=>{
    const hash= getTokenFromResponse();
    window.location.hash='';
    const _token  = hash.access_token;
   
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
      console.log(user);
      // dispatch({
      //   type: "SET_USER",
      //   user:user
      // });  
      });
    }
     console.log('I have a token', token);
  },[]);
  // console.log(user);
  return (
    <div>
        {
      token?
      (
        <Player/>         
        ):(
        <Login/>
        )}
    </div>
  )
}


export default App
