const ButtonList = props => (
  <div className="button-list">
    {props.selectedLang && (
      <button
        className="filter-button"
        onClick={() => props.setSelectedLang("")}
      >
        All
      </button>
    )}
    {props.languages.map(
      (language, index) =>
        language !== null && (
          <button
            className="filter-button"
            key={index}
            onClick={() => props.setSelectedLang(language)}
            style={{
              background: language === props.selectedLang && "royalblue"
            }}
          >
            {language}
          </button>
        )
    )}
  </div>
);

export default ButtonList;
