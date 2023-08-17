import './App.css';
import React, { useEffect } from 'react';

function App() {

  const clickHandler = () => {
    window.top.location.href = 'https://www.naver.com';
  }
  useEffect(() => {
    const handleMessage = (event) => {
      // 이벤트 발생 건의 출처 도메인 확인
      if (event.origin !== 'https://tood21.vercel.app/') return;

      const jsessionId = event.data;
      console.log('jsessionId', jsessionId);
      // 받은 jsessionId로 원하는 작업 수행
    };

    window.addEventListener('message', handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <h1>이너페이지</h1>
      <button onClick={clickHandler}>상위페이지 리다이렉션</button>
    </div>
  );
}

export default App;
