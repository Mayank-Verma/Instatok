import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Provider } from "react-redux";
import store from "../src/store/store"; // Import the store

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
