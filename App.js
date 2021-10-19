import { useEffect, useState } from "react";
import Form from "./Form";
import CardList from "./CardList";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [selectedLang, setSelectedLang] = useState("");

  const addNewProfile = profileData => setRepos(profileData);

  return (
    <>
      <main className="container">
        <Form
          onSubmit={addNewProfile}
          username={username}
          setUsername={setUsername}
          setLang={setSelectedLang}
        />
        {repos ? (
          <CardList
            repos={repos}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        ) : (
          <div className="not-found-message">
            Sorry we cannot find the user with the{" "}
            <span style={{ color: "white" }}>{username}</span> username :(
          </div>
        )}
      </main>

      {/* <div className="line line-first"></div>
      <div className="line line-second"></div> */}
    </>
  );
};

export default App;
