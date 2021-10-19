import { BsJournalText, BsCodeSlash } from "react-icons/bs";

const Card = props => {
  const repository = props;
  return (
    <div className="github-repository">
      {/* <div className="info"> */}
      <h5 className="info">
        <a href={repository.html_url} target="_blank">
          {repository.name}
        </a>
      </h5>
      {repository.description ? (
        <div className="info">
          <BsJournalText style={{ marginRight: "10" }} />
          {repository.description}
        </div>
      ) : (
        ""
      )}
      {repository.language ? (
        <div className="info">
          <BsCodeSlash style={{ marginRight: "10" }} />
          {repository.language}
        </div>
      ) : (
        ""
      )}
      <a className="cbutton" href={repository.html_url} target="_blank">
        See more
      </a>
      {/* </div> */}
    </div>
  );
};
export default Card;
