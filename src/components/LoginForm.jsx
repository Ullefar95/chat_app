import { useState } from "react";
import axios from "axios";

// Dette er login formen som brugeren skal bruge for at logge ind i chatrummet. Denne komponent skal importeres i App.js og bruges som en child-komponent til ChatEngine-komponenten.
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "bd499272-3f61-483b-9203-16e5e97ffe90",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //Username | Password => chatengine -> give message
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      // Hvis oplysninger er korrekte, så log ind
    } catch (error) {
      setError("Noget gik galt! prøv et andet username eller password");
      // error -> try with new username...
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="passsword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
