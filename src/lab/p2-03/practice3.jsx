// **해야 할 일**

import { Children } from "react";

// 1. `src/lab/practice1.jsx`를 만들고, 지난 시간 과제의 `StoryBody`와 `StoryItem`을 복사해 오세요.
// 2. 파일 맨 위에 적어뒀던 `username`과 `profileUrl` 두 변수를 지우고, 두 컴포넌트가 props로 받게 고치세요. 받는 이름은 `username`과 `profileImage`로 하고, 사진 설명도 받은 이름을 따라가야 해요.
// 3. `StoryList` 컴포넌트를 새로 만드세요. `storiesList` 클래스를 가진 `div` 하나뿐이고, 안에 들어갈 것은 `children`으로 받아요.
// 4. `StoryList` 안에 `StoryItem`을 둘 놓아 `minji`와 `seungwoo`가 나오게 하고, `App.jsx`에서 확인하세요.

// **함께 확인할 것** — 개발자 도구 Elements 탭에서 `storyItem` 하나를 펼쳐 직계 자식이 몇 개인지 세어보세요. 사진 덩이와 이름으로 둘이 나와야 맞고, 하나로 나왔다면 어디서 한 겹이 더 생겼는지 찾아보세요.

// ~/instagram-react/src/lab/practice1.jsx
const StoryBody = ({ username, profileImage }) => {
  return (
    <>
      <div className="storyAvatar">
        <div className="storyRing"></div>
        <img src={profileImage} alt={`${username}의 스토리`} />
      </div>
      <span className="storyUsername">{username}</span>
    </>
  );
};

export const StoryItem = ({ username, profileImage }) => {
  return (
    <div className="storyItem">
      <StoryBody username={username} profileImage={profileImage} />
    </div>
  );
};

export const StoryList = ({ Children }) => {
  return (
    <div className="storiesList">
      {Children}
    </div>
  )
};