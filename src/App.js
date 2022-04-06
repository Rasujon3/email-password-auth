import { getAuth } from "firebase/auth";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const handleEmailBlur = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };
  const handleFormSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" placeholder="Email" />{" "}
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
