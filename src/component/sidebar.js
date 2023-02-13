import React, { useEffect } from 'react'
import '../style/sidebar.css'
import SpotifyWebApi from "spotify-web-api-js";
import HomeIcon from '@mui/icons-material/Home';
// import  AiOutlineSearch from 'react-Icons/ai'
// import  BiHomeAlt from 'react-Icons/bi'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import SideBarOption from './SideBarOption';
import { getTokenFromResponse } from "../component/sportify";
import {useDataLayerValue } from '../DataLayer'
const s = new SpotifyWebApi();

function SlideBar() {
  const [{ token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);
  return (
    <div className='SlideBar'>
      <img
        className='SlideBar-img'
        src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAhgMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBBgcDAv/EADQQAAEDAgQEAggGAwAAAAAAAAABAgMEEQUTU5IGEiExUWFBUnGRk8HR4SJEYnOBsRQWI//EABoBAQACAwEAAAAAAAAAAAAAAAABBAMFBgL/xAAwEQEAAQQABAIIBgMAAAAAAAAAAQIDBBEFEiExUWETFSJxkaHR4TIzQUJSUwYUFv/aAAwDAQACEQMRAD8A43nS6sm9Tdahi2znS6sm5RqDZnS6sm5Ro2Z0urJuUaNmdLqyblGjZnS6sm5Ro2Z0urJuUaNmdLqyblGjbGdLqyblGoDOl1ZNyjUBnS6sm5RqAzpdWTco1AZ0urJuUagM6XVk3KNQGdLqyblGoGc6XVk3KNQbM6XVk3KNG3mSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWeDYbHiGbmSPYrLW5UTre/wBD1TET3ltOHYFOXzc1WtaWS8N06fmJfchMxT4tp6gt/wA5+ClxSkSiq1ha5zk5UVFXzPHT9GkzsWMW9NuJ2iBSAAAAAAAAAAAAAAALbhudIq1YlXpK2ye1Ov1PFc6jbc8EvRRk8k/uhs9ytVddhEKbiGidNG2oibd8aWcid1b9ibV6N6louN4VV2iL1HeO/u+zWy25QCAAAAAAAAAAAAWeFYQuIwPkSdI+V/LZWXv09pOum20wOGzl0TVFWteSYvDTk71afD+5hquxS2H/AD1X9ny+7MfD8kT2vZWIjmrdP+fp95hqyI1rT3RwG5RVFVNzrHl914l7JfqvkhTmp0kROur0ZC93ZqmOa0qvEsBhkVZGtdE9e/KnRf4LmPfmektHm8JsXJ56fZny+jWqymWlmy1dzdL3tY2E9HL5Nj0Fzk3t4EK4AAAAAAAAAAbTwj1pZv3fkhgvXOXo6v8Ax/8AJr97Y0psxOnco13m/G4VUOXoiWK9V6E7T6XCGsW8q3XwMNVyZ7ImpYMpYmJZGp7jx1l55kaupI3xrZEvYyUVTTKJjbmfE0eViat/Qn9qbyzXz0bcfxmjlydeX1VJmagAAAAAAAAAAJ2HYpU4e1WwJGrXLdUe25iuWabndfxOI3sSmabetT4ttwDianqpWQVTUgld0at/wuXw8l9pr7+JVTG6esOgwuM0X5ii5HLPybgyRqJ3KUW5luJR8Ulqf8CZaBzUqWt5mcyXRVT0Ga3ajmjmjor5PpfRTNr8Tn68a4z68HwjYxh2nLeucvxj4Pl3GeMOSyvg+ET/AKdpPrrK8vgp6+umr586pVFktb8KWSxnt24txqFHJyrmTXz3O6Me1YAAAASBAAAAAAADoHDGLPrMNakzlWWJeRyqvV3gpVqsRzdHZ8Kypv4/td46LltV5kehbNzXHYW0+L1cbLI1JLoieC9fmWaN6cLn24tZNdEeKAelMAAAAAAEgQAAAAAAAn4bik+HNekKMVH2VeZF9A3pfw8+7ixPJEdfFM/2as9SHav1J5p8Fz17keEfNWV9W+tqXVEqNRzrXRvboQ1mTkVZFyblXeUcK4AAAAAAAAAAAAAAAAAAAAAAAAAASBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEv/Z'
        alt='slidebar'
       />
    <SideBarOption Icon={HomeIcon} title='Home'/>
    <SideBarOption Icon= {SearchIcon} title ='Search' />
    <SideBarOption  Icon={LibraryMusicIcon} title ='Library'/>
    <br/>
    <strong className='sidebar_title'>PLAYLISTS</strong>
    <hr/>

  {/* {playists?.items?.map(playists =>{
          <SideBarOption title={playists.name}/>
  })} */}
    {/* <SideBarOption  title='Hip-hop'/>
    <SideBarOption title='Rock' />
    <SideBarOption title='RNB' /> */}

    </div>
  )
}

export default SlideBar;
