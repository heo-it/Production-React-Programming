import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [pageName, setPageName] = useState('');

  useEffect(() => {
		window.onpopstate = function (event) {
      setPageName(event.state);
		}
	}, []);

  function onClick(page = '') {
    window.history.pushState(page, '', `/${page}`);
    setPageName(page);
  };

  return (
		<div>
			<button onClick={() => onClick('page1')}>page1</button>
			<button onClick={() => onClick('page2')}>page2</button>
      {/* 일종의 라우팅 */}
      {!pageName && <Home />} 
      {pageName === 'page1' && <Page1 />} 
      {pageName === 'page2' && <Page2 />} 
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

function Home() {
  return <h2>Home :)</h2>
};

function Page1() {
  return <h2>Page - 1</h2>
};

function Page2() {
  return <h2>Page - 2</h2>
};