import Card from "./components/card/Card";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <div style={{display: "flex", justifyContent: "space-evenly", alignItems: 'center'}}>
        <Card />
      </div>
    </>
  );
}

export default App;
