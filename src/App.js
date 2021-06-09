import './App.css';

import PostForm from './components/froms/PostFrom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 offset-sm-2'>
          <PostForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
