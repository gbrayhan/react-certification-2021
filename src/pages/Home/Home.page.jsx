import React, {useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {useAuth} from '../../providers/Auth';
import VideoItem from "../../components/VideoItem";
import './Home.styles.css';
import {HomeContainer, VideosContainer} from "./Home.page.styled";

import {initialData} from "../../initialData";

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const {authenticated, logout} = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <HomeContainer ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator"/>
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}

      <VideosContainer>
        {initialData.items.map(item => (
          <VideoItem title={item.snippet.title}
                     image={item.snippet.thumbnails.high.url}
                     description={item.snippet.description}/>
        ))}
      </VideosContainer>
    </HomeContainer>
  );
}

export default HomePage;
