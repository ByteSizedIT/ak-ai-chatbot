import * as React from "react";

const App = () => {
  return (
    <div className="chatbot">
      <div className="header">
        <div className="info-container">
          {/* <HomePageIcon></HomePageIcon>
            <ChatIcon></ChatIcon>
            <LogOutIcon></LogOutIcon> */}
        </div>
        <div className="tick"></div>
      </div>
      <div className="messaging-container">
        <div className="feed">
          <div>
            <div className="question bubble"></div>
            <div className="response bubble"></div>
          </div>
        </div>
        <div className="submit-container">
          <form action="">
            <textarea />
            <input type="submit" value="&#x2192;" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
