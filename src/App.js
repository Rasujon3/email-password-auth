import { getAuth } from "firebase/auth";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}

export default App;
