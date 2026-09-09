const tags = [
  { id: 1, name: '한강', count: 12400 },
  { id: 2, name: '노을', count: 8700 },
  { id: 3, name: '카페', count: 152000 },
  { id: 4, name: '퇴근길', count: 340 },
];

const HashtagList = () => {
  console.log('왜안되냐;')
  return(
    <ul>
      {
        tags.map(tag => (
          <li key={tag.id}>
            #{tag.name} 게시물 {tag.count.toLocaleString()}개
          </li>
        ))
      }
    </ul>
  );
};

export default HashtagList;

// **해야 할 일**

// 1. `src/lab/practice1.jsx`를 만들고 `HashtagList`를 짜세요.
// 2. 컴포넌트 위에 `tags` 배열을 두세요. 칸은 `id`, `name`, `count` 셋이고 값은 아래 넷을 그대로 쓰세요.
// `한강 12400` · `노을 8700` · `카페 152000` · `퇴근길 340`
// 3. `ul`과 `li`로 그리되 `li`는 `map`으로 만드세요.
// 4. 각 줄은 `#한강 게시물 12,400개`처럼 나오게 하세요. 숫자에 쉼표를 찍는 방법은 좋아요 개수에서 쓴 것과 같아요.
// 5. `App.jsx`에서 잠깐 불러다 화면에 띄우고, 콘솔에 빨간 줄이 없는지 확인하세요.

// **함께 적어올 것** — 4번에서 `#`을 어디에 어떻게 적었는지 한 줄로 적으세요. JSX 안에서 `#`이 특별한 글자가 아니라 그냥 글자라는 것을 확인해보는 거예요.