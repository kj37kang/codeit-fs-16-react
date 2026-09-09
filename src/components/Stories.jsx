import { useEffect, useState } from "react";
import styles from "./Stories.module.scss";
import StoryItem from "./StoryItem.jsx";

const Stories = ({onSelect}) => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    (async () => {
      try{
        const res = await fetch('http://localhost:3001/stories');
        if(!res.ok){
          throw new Error(`서버가 ${res.status}로 답했어요`);
        }
        const data = await res.json();
        setStories(data);
      }catch(error){
        alert(`게시글 주소가 잘못되었습니다. ${error}`);
        console.error(`게시글 주소가 잘못되었습니다. ${error}`);
      }
    })();
  }, []);

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storiesList}>
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            username={story.username}
            profileImage={`https://picsum.photos/seed/${story.username}/50/50`}
            unseen={story.unseen}
            onSelect={() => onSelect(story.username)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;