// npm install react-chat-engine //
import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

// Css er tyvstjålet fra anden udvikler da jeg ville fokusere på backend delen af projektet
import "./App.css";

// Projekt ID til link af min profil på - https://chatengine.io/
const projectID = "bd499272-3f61-483b-9203-16e5e97ffe90";

// et If statement der tjekker om bruger er logget ind samt henter informationer om bruger ved login. (afspiller også lyd ved ny besked)
const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

//exportere app.js så den kan importeres i andre filer i projektet
export default App;
