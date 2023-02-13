
import {useEffect, useState} from 'react';

import axios from 'axios';
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "5f3d6c984f79461bad4964d36e594725";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;  

export default function Header() {
      const [token, setToken] = useState("")
      const [searchKey, setSearchKey] = useState("")
      const [artists, setArtists] = useState([])
        useEffect(() => {
            const hash = window.location.hash
            let token = window.localStorage.getItem("token")

            if (!token && hash) {
                token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

                window.location.hash = ""
                window.localStorage.setItem("token", token)
            }

            setToken(token)

        }, [])
        // const logout = () => {
        //     setToken("")
        //     window.localStorage.removeItem("token")
        // }
        const searchArtists = async (e) => {
          e.preventDefault()
          const {data} = await axios.get("https://api.spotify.com/v1/search", {
              headers: {
                  Authorization: `Bearer ${token}`
              },
              params: {
                  q: searchKey,
                  type: "artist"
              }
          })
      
          setArtists(data.artists.items)
      }
      const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"1%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }
    // {renderArtists()} 
    return (
        <div className="App">
            {/* <Header/> */}
            {/* <header className="App-header"> */}
              
               {/* <h1>Spotify React</h1> */}
                {/* {!token ?
                    <a href={accessUrl}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header> */}
                <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                </form>
                {renderArtists()}
        </div>
    );
}








































































