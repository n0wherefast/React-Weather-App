import { Search } from "./Components/Search";
// import { Bg } from "./Components/Bg";
import { Card } from "./Components/Card";

function App() {
  

  const onChange = (e) => {
   let value = e.target.value;
   return  console.log(value)
};
  
  return (
    <div className="App">
      
 <Search  />



  {/* <Card
  prova={''}/> */}

    </div>
  );
}

export default App;
