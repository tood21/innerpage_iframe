import './App.css';

function App() {

  const clickHandler = () => {
    window.top.location.href = 'https://www.naver.com';
  }


  return (
    <div className="App">
      <h1>이너페이지</h1>
      <button onClick={clickHandler}>상위페이지 리다이렉션</button>
    </div>
  );
}

export default App;
