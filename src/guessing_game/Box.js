import React, { useState, useEffect } from "react";
import "./Box.css";
import Button from "@material-ui/core/Button";
import Flippy, { FrontSide, BackSide } from "react-flippy";
export default function Box({ fruite, randomWord, setFindWord, start }) {
  const [chooseWord, setchooseWord] = useState();
  const [decision, setdesicsion] = useState(true);
  const [count, setcount] = useState(0);
  const [flipper, setflipper] = useState(false);
  const handlefruite = (cardName) => {
    setchooseWord(cardName);
    setcount(count + 1);
  };
  const afterWon = () => {
    setflipper(true);
    return setTimeout(() => {
      setcount(0);
      setflipper(false);
      start();
      setflipper();
    }, 200);
  };
  const matchCard = () => {
    if (count === 5) {
      setflipper(true);
      return setTimeout(() => {
        setcount(0);
        setflipper(false);
        start();
        setflipper();
      }, 3000);
    }
    if (randomWord === chooseWord) {
      return setdesicsion(true);
    } else {
      return setdesicsion(false);
    }
  };
  console.log(fruite);
  useEffect(() => {
    matchCard();
  });
  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            afterWon();
          }}
        >
          Start Game
        </Button>
      </div>
      <div className="root row col align-items-start">
        <div className="Box row">
          {fruite.map((fruit) => (
            <div>
              <Flippy
                flipOnHover={false}
                flipOnClick={true}
                isFlipped={flipper} 
                flipDirection="horizontal"
                onClick
                style={{ width: "170px", height: "170px" }} /// these are optional style, it is not necessary
              >
                <div style={{ width: "170px", height: "170px" }}>
                  <FrontSide
                    style={{
                      backgroundColor: "#41669d",
                    }}
                    onClick={() => {
                      handlefruite(fruit);
                    }}
                  >
                    <i class="fas fa-dice-d20 fa-7x"></i>
                  </FrontSide>
                </div>
                {decision ? (
                  <BackSide
                    style={{
                      backgroundColor: "green",
                      fontSize: "200%",
                    }}
                  >
                    {fruit}
                    <div>
                      <p>You Won</p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          afterWon();
                        }}
                      >
                        Start New Game
                      </Button>
                    </div>
                  </BackSide>
                ) : (
                  <BackSide
                    style={{ backgroundColor: "red", fontSize: "150%" }}
                  >
                    {randomWord === fruit ? (
                      <div
                        style={{
                          backgroundColor: "orange",
                          height: "100px",
                          width: "150px",
                          textAlign: "center",
                        }}
                      >
                        {fruit}
                        <p>You Lose</p>
                      </div>
                    ) : (
                      <div>
                        {fruit}
                        <p>You Have {5 - count} attempts left</p>
                      </div>
                    )}
                  </BackSide>
                )}
              </Flippy>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
