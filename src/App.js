 import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header className='header'>
          La Plata's YPF Map
        </header>
        <iframe 
          src="https://mapappoint.netlify.app/" 
          width="900" 
          height="700" 
          allow="fullscreen"
          className='frame'
          >

        </iframe>
      </div>
    </div>
  );
}

export default App;
