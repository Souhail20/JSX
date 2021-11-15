import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <div>
        <img src="/imageInPublic.png" alt="GomyCode" />
        </div>   
        <div>
        <img src={imageInSrc} alt ='myImage' />
        </div>       
      </div>
      
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
