import './App.css';
import {useEffect, useState} from 'react';
// import axios from 'axios';
import { getTokenFromResponse } from './component/sportify';
import SpotifyWebApi from 'spotify-web-api-js'
// import { accessUrl } from './component/sportify';
import Login from './component/login';
import Player from './component/Player';

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
    console.log(token);
      // dispatch({
      //   type: "SET_USER",
      //   user:user
      // });  
      });
    }
    //  console.log('I have a token', _token);
  },[]);
    //   const [token, setToken] = useState("")
    //   const [searchKey, setSearchKey] = useState("")
    //   const [artists, setArtists] = useState([])
    //     useEffect(() => {
    //         const hash = window.location.hash
    //         let token = window.localStorage.getItem("token")

    //         if (!token && hash) {
    //             token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

    //             window.location.hash = ""
    //             window.localStorage.setItem("token", token)
    //         }

    //         setToken(token)

    //     }, [])
    //     const logout = () => {
    //         setToken("")
    //         window.localStorage.removeItem("token")
    //     }
    //     const searchArtists = async (e) => {
    //       e.preventDefault()
    //       const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //           headers: {
    //               Authorization: `Bearer ${token}`
    //           },
    //           params: {
    //               q: searchKey,
    //               type: "artist"
    //           }
    //       })
      
    //       setArtists(data.artists.items)
    //   }
    //   const renderArtists = () => {
    //     return artists.map(artist => (
    //         <div key={artist.id}>
    //             {artist.images.length ? <img width={"1%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
    //             {artist.name}
    //         </div>
    //     ))
    // }
    // {renderArtists()} 
    return (
        <div className="App">
            {/* <header className="App-header">
              
               <h1>Spotify React</h1>
                {!token ?
                    <a href={accessUrl}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
                <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                </form>
                {renderArtists()} */}
                {
                      token?
                      (
                        <Player/>         
                        ):(
                        <Login/>
                )}
        </div>
    );
}

export default App;








































































// import React, {useEffect, useState} from 'react';
// import Login from './component/login';
// import Player from './component/Player';
// import { getTokenFromResponse } from './component/sportify';
// import SpotifyWebApi from 'spotify-web-api-js'
// import './App.css';
// import axois from 'axios'
// // import { useDataLayerValue } from './DataLayer';

// const spotify  = new SpotifyWebApi();


// function App() {
//   const [token, setToken] =useState(null);
//   // const [{}, dispatch ]=useDataLayerValue();
//   useEffect(()=>{
//     const hash= getTokenFromResponse();
//     window.location.hash='';
//     const _token  = hash.access_token;
   
//     if (_token) {
//       setToken(_token);
//       spotify.setAccessToken(_token);
//       spotify.getMe().then(user =>{
//       console.log(user);
//     console.log(token);
//       // dispatch({
//       //   type: "SET_USER",
//       //   user:user
//       // });  
//       });
//     }
//     //  console.log('I have a token', _token);
//   },[]);
//   // console.log(user);
//   return (
//     <div>
//         {
//       token?
//       (
//         <Player/>         
//         ):(
//         <Login/>
//         )}
//     </div>
//   )
// }


// export default App
// import './App.css';
// import Login from './component/login';

// // const CLIENT_ID ="5f3d6c984f79461bad4964d36e594725"
// // const REDIRECT_URI = "http://localhost:3000"
// // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
// // const RESPONSE_TYPE = "token"
// function App() {
//   // "5f3d6c984f79461bad4964d36e594725"
//     return (
//         <div className="App">
//             <header className="App-header">
//             <Login/>

//             </header>
//         </div>
//     );
// }

// export default App;
