// **해야 할 일**

// 1. `src/lab/practice3.jsx`를 만들고 `Stories.jsx`의 내용을 그대로 복사해 붙여넣으세요. 수업 파일은 그대로 두고 사본에서 고쳐요.
// 2. `stories`를 State로 바꾸세요. Step 4에서 `posts`에 한 것과 같아요.
// 3. 스토리 하나를 눌렀을 때 그 칸의 `unseen`만 `false`로 바꾸는 함수를 만드세요. `map`으로 새 배열을 만들되 번호가 맞는 것만 바꾸면 돼요.
// 4. 그 함수를 스토리 한 칸에 넘겨서 바깥쪽 `div`의 `onClick`에 걸게 하세요. 한 칸을 그리는 컴포넌트도 같은 파일 안에 사본으로 두면 편해요.
// 5. 칸을 하나씩 눌러 테두리가 사라지는지 확인하세요.
// 6. 안 본 스토리가 몇 개 남았는지 스토리 줄 위에 글자로 띄우세요. 하나도 안 남으면 그 줄은 아예 안 보이게 하세요.

// **함께 적어올 것** — 6번에서 「하나도 안 남으면 안 보이게」를 세 방법 중 무엇으로 적었는지, 그리고 거기에 `&&`를 썼다면 왼쪽에 무엇을 뒀는지 적으세요.

import { useState } from 'react';
import styles from '../../components/Stories.module.scss';

const initialStories = [
  { id: 1, username: 'jaehoon', unseen: true },
  { id: 2, username: 'minji', unseen: true },
  { id: 3, username: 'seungwoo', unseen: false },
  { id: 4, username: 'yuna', unseen: true },
  { id: 5, username: 'dohyun', unseen: false },
  { id: 6, username: 'ssong', unseen: true },
  { id: 7, username: 'hyerin', unseen: false },
  { id: 8, username: 'taeyang', unseen: true },
];

const StoryItem = ({ username, profileImage, unseen, onSeen }) => {

  return (
    <div className={styles.storyItem} onClick={onSeen}>
      <div className={styles.storyAvatar}>
        {unseen && <div className={styles.storyRing}></div>}
        <img
          src={profileImage}
          alt={`${username}의 스토리`}
        />
      </div>
      <span className={styles.storyUsername}>{username}</span>
    </div>
  );
};


const Stories = () => {

  const [ stories, setStories ] = useState(initialStories);

  const handleSeen = (id) => {
    console.log(id);
    // const found = stories.find(s => s.id === id);
    // found.unseen = false;
    // const copyStories = [...stories];

    // setStories(copyStories);
  };

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storiesList}>
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            username={story.username}
            profileImage={`https://picsum.photos/seed/${story.username}/50/50`}
            unseen={story.unseen}
            onSeen={() => handleSeen(story.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;