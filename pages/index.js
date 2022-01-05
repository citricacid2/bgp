import { useEffect, useState } from "react";
import Dice from "react-dice-roll";
import Modal from "react-modal";
import questions from "./questions.json";
import shuffle from "shuffle-array";

export default function Home() {
  shuffle(questions);

  // const firstQuestion = questions.pop();

  // const [question, setQuestion] = useState(firstQuestion.question);
  // const [correctAnswer, setCorrectAnswer] = useState(firstQuestion.answer);
  // const [image, setImage] = useState(firstQuestion.image);
  const [question, setQuestion] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [image, setImage] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  const [diceValue, setDiceValue] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [val, setVal] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(null);

  console.log(questions)

  const makeQuestion = () => {
    const q = questions.pop();
    setQuestion(q.question);
    setCorrectAnswer(q.answer);
    setImage(q.image);
  };

  useEffect(makeQuestion, [])

  const reset = () => {
    setCorrect(null);
    setDiceValue(null);
    setAnswer(null);
    setCorrect(null);
    setQuestionNumber(questionNumber + 1);
    makeQuestion();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-red-200 h-screen p-5">
        <div className="m-5 rounded-xl bg-white shadow-xl p-5 text-center">
          <h1 className="text-2xl font-bold">Step #1:</h1>
          <h2 className="text-xl mt-3">Roll your die!</h2>
          <Dice
            onRoll={(value) => setDiceValue(value)}
            disabled={diceValue}
            size={50}
          />
          {diceValue && <p>You rolled {diceValue}!</p>}
        </div>
      </div>
      <div
        className={
          "bg-yellow-200 h-screen p-5 transition-all" +
          (diceValue ? "" : " blur-sm")
        }
      >
        <div className="m-5 rounded-xl bg-white shadow-xl p-5 text-center">
          <h1 className="text-2xl font-bold">Step #2:</h1>
          <h2 className="text-xl mt-3">Draw your card!</h2>
          <button
            className="bg-blue-500 px-4 py-2 mt-10 text-white rounded-xl"
            onClick={() => setModalOpen(true)}
            disabled={!diceValue}
          >
            Press me
          </button>
          <Modal isOpen={modalOpen}>
            <div className="p-5 text-center">
              {!answer && (
                <div>
                  <h2 className="text-2xl font-bold">
                    Question #{questionNumber}
                  </h2>
                  <h3 className="text-xl pt-3">{question}</h3>
                  {image && <img src={image} alt="" className="h-52 mx-auto" />}
                  {correctAnswer !== "" ? (
                    <div>
                      <input
                        type="text"
                        className="rounded-xl border-2 p-2 mt-5"
                        placeholder="What is your answer?"
                        onChange={(event) => setVal(event.target.value)}
                      />
                      <button
                        className="bg-blue-500 px-4 py-2 mt-5 text-white rounded-xl mx-3"
                        onClick={() => setAnswer(val)}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="bg-blue-500 px-4 py-2 mt-5 text-white rounded-xl mx-3"
                        onClick={() => {
                          setModalOpen(false);
                          reset();
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              )}

              {answer && (
                <div>
                  <p>Your answer: {answer}</p>
                  <p>Correct answer: {correctAnswer}</p>
                  <button
                    className="bg-green-500 px-4 py-2 mt-5 text-white rounded-xl mx-3"
                    onClick={() => {
                      setCorrect(true);
                      setModalOpen(false);
                    }}
                  >
                    Correct
                  </button>
                  <button
                    className="bg-red-500 px-4 py-2 mt-5 text-white rounded-xl mx-3"
                    onClick={() => {
                      setCorrect(false);
                      setModalOpen(false);
                    }}
                  >
                    Incorrect
                  </button>
                </div>
              )}
            </div>
          </Modal>
        </div>
      </div>
      <div
        className={
          "bg-green-200 h-screen p-5 transition-all" +
          (correct !== null ? "" : " blur-sm")
        }
      >
        <div className="m-5 rounded-xl bg-white shadow-xl p-5 text-center">
          <h1 className="text-2xl font-bold">Step #3:</h1>
          <h2 className="text-xl my-3">Move your piece!</h2>
          <p>You rolled a {diceValue}!</p>
          <p>You were {correct ? "correct" : "incorrect"}!</p>
          <p>
            Therefore, you need to move {diceValue} squares{" "}
            {correct ? "forward" : "backward"}!
          </p>
          <button
            className="bg-blue-500 px-4 py-2 mt-5 text-white rounded-xl mx-3"
            onClick={reset}
            disabled={correctAnswer === null}
          >
            New Turn
          </button>
        </div>
      </div>
    </div>
  );
}
