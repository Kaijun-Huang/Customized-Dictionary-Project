import { getWord, test } from "api/getWord";
import style from "page/HomePage.module.scss";
import { useRef, useState } from "react";
import {
  findAttribute,
  findAttributes,
  getExactWordRes,
  showPartOfSpeech,
  showShortDefList,
  showheadWord,
  starRemoval,
} from "./dataParse";

export const HomePage = () => {
  const [inputWord, setInputWord] = useState("");
  const [wordData, setWordData] = useState([]);

  const checkupWord = async (input) => setWordData(await getWord(input));

  const showData = (data) => {
    return data.map((datum) => {
      //   const headword = findAttribute(datum, "hw");
      const partOfSpeech = findAttribute(datum, "fl");
      const shortdef = findAttribute(datum, "shortdef");
      const syns = findAttribute(datum, "syns");

      return (
        <>
          <p className={style.partOfSpeech}>{partOfSpeech}</p>
          {shortdef.map((def, i) => {
            return (
              <li key={i} className={style.definition}>
                {def}
              </li>
            );
          })}
          {/* <p>{syns}</p> */}
        </>
      );
    });
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="search word"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button onClick={() => checkupWord(inputWord)}>click</button>
      <div className={style.dataPanel}>
        <p>Search Result</p>
        <p className={style.headword}>{inputWord}</p>
        {showData(getExactWordRes(wordData, inputWord))}
      </div>
    </div>
  );
};
