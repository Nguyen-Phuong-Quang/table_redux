import ListStudent from "./components/ListStudent/ListStudent";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App grid wide" style={{ marginTop: "32px" }}>
      <Search />
      <ListStudent />
    </div>
  );
}

export default App;
