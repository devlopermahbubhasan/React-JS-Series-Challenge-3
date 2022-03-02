
import './App.css';

function App() {
  const name = "Mahbub Hasan";
  const currentTime = new Date().toLocaleTimeString();
  const time = new Date();
   let timeH = time.getHours();
  let gretting = "";
  const cssStyle = {};
  if (timeH <= 1 && timeH > 12) {
    gretting = "Good Morning";
    cssStyle.color = "orange";
  }if (timeH >= 12 && timeH < 19) {
    gretting = "Good Afternoon";
    cssStyle.color = "green";
    
  
  } else {
    gretting = "good Night";
    cssStyle.color = "black";
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>My Name Is {name}</h1>
          <h4>Current Time = {currentTime}</h4>
          <div className="dicStyle">
            <h2>Hello Sir , <span style ={cssStyle}> {gretting} </span></h2>
          </div>
      </header>
    </div>
  );
}

export default App;
