import { useState } from "react";
import ButtonList from "./ButtonList";
import Card from "./Card";

const CardList = props => {
  const { selectedLang } = props;
  const languages = Array.from(new Set(props.repos.map(item => item.language)));

  return (
    <div className="card-list">
      <ButtonList
        languages={languages}
        setSelectedLang={props.setSelectedLang}
        selectedLang={selectedLang}
      />
      {props.repos
        .filter(r => r.language === (selectedLang ? selectedLang : r.language))
        .map(repository => (
          <Card key={repository.id} {...repository} />
        ))}
    </div>
  );
};
export default CardList;
