// ### 직접 해보기 — 알림에도 세 상태를 붙이기

// `src/lab/practice1.jsx`를 만들고 `NotificationBox`를 지으세요. 서버의 `/notifications`를 받아 목록으로 그리되, 오늘 배운 로딩 State를 붙이는 문제예요.

// **해야 할 일**

// 1. 알림을 받아와 `username`과 `text`를 한 줄로 그리세요.
// 2. 받는 동안에는 「불러오는 중…」을 보여주세요.
// 3. 받아온 게 0개일 때는 「알림이 없습니다.」를 보여주세요.
// 4. 로딩 중에 3번이 잠깐 뜨지 않게 하세요. 순서가 중요해요.

// 뼈대를 줄 테니 빈칸을 채워 완성하면 돼요.

// ~/instagram-react/src/lab/practice1.jsx
import { useState, useEffect } from 'react';

const NotificationBox = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3001/notifications');
        if (!response.ok) {
          throw new Error(`서버가${response.status}로 답했어요`);
        }
        setNotifications(await response.json());
      } catch (err) {
        console.error('알림을 가져오지 못했어요.', err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  if (isLoading) {
    return<p>불러오는 중...</p>;
  }

  if (notifications.length === 0) {
    return<p>알림이 없습니다.</p>;
  }

  return (
    <ul>
      {notifications.map((item) => (
        <li key={item.id}>
          {item.username} — {item.text}
        </li>
      ))}
    </ul>
  );
};

export default NotificationBox;