import Emojilist from '../emojiList';
import React, { useEffect, useState } from 'react';
import Container from './Container';

const Main = () => {
  const [emoji, setEmoji] = useState(Emojilist);
  const [keyvalue, setKeyValue] = useState("");

  useEffect(_ => {

    const filterList = emoji.filter((singleEmoji) => {

      if(singleEmoji.emoji === keyvalue) {
        return true;
      }
      if(singleEmoji.description.startsWith(keyvalue)) {
        return true;
      }
      if(singleEmoji.category.startsWith(keyvalue)) {
        return true;
      }
      if(singleEmoji.aliases.some(e => e.startsWith(keyvalue))) {
        return true;
      }
      return false;
    });

    setEmoji(filterList);
  }, [keyvalue]);

  return (
    <div>
      <div className='nav'>
        <span>EmojiFii</span>
        <a href='github.com'>GitHub</a>
      </div>
      <div className='main'>
      <input type="text" placeholder="Search Emoji " onKeyUp = {(e) => setKeyValue(e.target.value.toLowerCase())}/>
      <div className='card'>
        {
          emoji.length === 0 ? (
            <span>Not Emoji Found</span>
          ) : (
            emoji.map((emojiFace, idx) =>{
              return(
                <Container key={idx} emoji={emojiFace.emoji} description={emojiFace.description}/>
              )
            })
          )
        }
      </div>
      </div>
    </div>
  );
}

export default Main;
