import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';
import { Link } from 'react-router-dom';

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://avatars.githubusercontent.com/u/139708582?v=4" alt="Jonatas" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Jonatas Borges</strong>
          <span>@jos.ninoo</span>
        </div> 

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            18
          </button>
          <button type='button'>
            <ArrowsClockwise />
            18
          </button>
          <button type='button'>
            <Heart />
            18
          </button>
        </div>
      </div>
    </Link>
  )
}