import {
  sort,
  countDoubleNumber,
  flip,
  removeDuplicate,
  removeNumber,
} from "./utils";
import "./index.css";
import { useState } from "react";

export default function App() {
  const defaultDominoes = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [dominoes, setDominoes] = useState(defaultDominoes);
  const [value, setValue] = useState(0);

  return (
    <div className="page">
      <h1>Dominoes</h1>
      <div className="section">
        <h2>Source</h2>
        <div>
          {dominoes.map((card) => (
            <span>
              [{card[0]}, {card[1]}]{" "}
            </span>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Double Numbers</h2>
        <div>{countDoubleNumber(dominoes)}</div>
      </div>
      <div className="flex">
        {dominoes.map((card) => {
          const [top, bottom] = card;
          return (
            <div className="domino-box">
              <span>{top}</span>
              <span>-</span>
              <span>{bottom}</span>
            </div>
          );
        })}
      </div>
      <div className="flex gap-10">
        <button
          className="button"
          onClick={() => setDominoes(sort(dominoes, "asc"))}
        >
          Sort (ASC)
        </button>
        <button
          className="button"
          onClick={() => setDominoes(sort(dominoes, "desc"))}
        >
          Sort (DESC)
        </button>
        <button className="button" onClick={() => setDominoes(flip(dominoes))}>
          Flip
        </button>
        <button
          className="button"
          onClick={() => setDominoes(removeDuplicate(dominoes))}
        >
          Remove Dup
        </button>
        <button className="button" onClick={() => setDominoes(defaultDominoes)}>
          Reset
        </button>
      </div>
      <div className="gap-10">
        <input
          type="text"
          placeholder="Input Number"
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button
          className="button"
          onClick={() => setDominoes(removeNumber(dominoes, value))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
