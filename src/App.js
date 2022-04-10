
// import './App.css';

var mob = {
  heading:"Mobile Operating System",
  data:["android","blackberry","iPhone","Windows Phone"]
}
var mobM={
  heading:"Mobile Manufacturers",
  data:[
    {
      m:"samsung",
      style:{listStyleType: "square"}
    },
    {
      m:"HTC",
      style:{listStyleType: "square"}
    },
    {
      m:"Micromax",
      style:{listStyleType: ""}
    },
    {
      m:"Apple",
      style:{listStyleType: "circle"}
    },
  ]
}

function App() {
  return (
    <div className="App">
      <h3>{mob.heading}</h3>
      <ul>
        {
          mob["data"].map((e)=>{
            return <li>{e}</li>
          })

        }
      </ul>
      <h3>{mobM.heading}</h3>
      <ul>
        {
          mobM["data"].map((e)=>{
            return <li style={e.style}>{e.m}</li>
          })

        }
      </ul>
    </div>
  );
}

export default App;
