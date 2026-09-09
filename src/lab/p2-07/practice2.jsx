// Step 4의 `filter`와 Step 2의 `map`을 이어서 써볼게요.

import { useState } from "react";

// **해야 할 일**

// 1. `src/lab/practice2.jsx`를 만들고 `PopularTagList`를 짜세요. 배열은 `practice1`에서 쓴 것을 그대로 가져오세요.
// 2. 게시물이 `1000`개 이상인 것만 남기세요.
// 3. 남은 것을 `map`으로 그리되 `key`를 붙이세요.
// 4. 게시물이 `100000`개 이상인 줄 끝에는 `🔥`를 붙이세요. 앞에 공백이 하나 들어가요.
// 5. 화면에 띄워서 네 줄이 세 줄이 되고 그중 한 줄에만 불이 붙는지 확인하세요.

// **함께 적어올 것** — 2번의 거르기와 3번의 그리기를 각각 어디에 적었는지 한 줄로 적으세요. 두 가지를 한 줄에 이어 붙일 수도 있는데, 그렇게 했다면 왜 그렇게 했는지도 같이 적어주세요.

const tags = [
  { id: 1, name: '한강', count: 12400 },
  { id: 2, name: '노을', count: 8700 },
  { id: 3, name: '카페', count: 152000 },
  { id: 4, name: '퇴근길', count: 340 },
];

const PopularTagList = () => {
  return (
    <ul>
      {tags
        .filter(tag => tag.count >= 1000)
        .map(tag => (
          <li key={tag.id}>
            #{tag.name} 게시물 {tag.count.toLocaleString()}개{' '}
            {tag.count >= 100000 && '🔥'}
          </li>
        ))
      }
    </ul>
  );
};

export default PopularTagList;