import Header from "./components/Header";
import Timeline from "./components/Timeline";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Timeline />
      </main>
      <footer>
        <p>&copy; 2025 Timeline App</p>
      </footer>
    </>
  );
}

export default App;
