import { useEffect } from "react";
import axios from "axios";

const Form = props => {
  const { username } = props;
  const handleSubmit = async event => {
    event.preventDefault();
    await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(resp => props.onSubmit(resp.data))
      .catch(e => {
        console.error(e);
        props.onSubmit(false);
      });
  };

  useEffect(() => {
    props.onSubmit([]);
    props.setLang("");
  }, [username]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="header">
        List of {username ? username + "'s " : ""}repositories
      </h1>
      <div>
        <input
          className="input"
          type="text"
          value={username}
          onChange={event => props.setUsername(event.target.value)}
          onFocus={() => {
            props.setUsername("");
          }}
          placeholder="GitHub username"
          required
        />
        <button className="button">Start</button>
      </div>
    </form>
  );
};
export default Form;
