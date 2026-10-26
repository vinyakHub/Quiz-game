import { useReducer } from "react";
import celebration from "./assets/celebration.mp4";
import failed from "./assets/failed.mp4";

export default function Quizgame({
  reactQuestions,
  reverseMin,
  reverseSec,
  setReactQuestions,
  givenNextCount,
}) {
  const [rightAnsColor, wrongAnsColor] = [
    {
      border: "2px solid green",
      cursor: "not-allowed",
    },
    {
      border: "2px solid orange",
      cursor: "not-allowed",
    },
  ];

  const initialState = {
    isDisabled: false,
    isRightAns: false,
    count: 1,
    queCount: 1,
    pointCount: 0,
    progressWidth: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDisabled, isRightAns, count, queCount, pointCount } = state;

  function reducer(state, action) {
    switch (action.type) {
      case "handleClickAns":
        return { ...state, isRightAns: true };
      case "next":
        return {
          ...state,
          count: state.count + 1,
          queCount: state.queCount + 1,
          isRightAns: false,
        };
      case "point":
        return {
          ...state,
          pointCount: state.pointCount + 10,
        };
      default:
        return;
    }
  }

  function handleClickAns(id) {
    if (isDisabled) return;
    dispatch({ type: "handleClickAns" });
    const currentData = reactQuestions.find((finding) => finding.id === count);
    const currentOption = currentData.options.find(
      (option) => id === option.id,
    );
    return currentOption.isCorrect === true && dispatch({ type: "point" });
  }

  function handleNext() {
    dispatch({ type: "next" });
    setReactQuestions((data) => {
      return data.map((prev) => ({
        ...prev,
        flag: prev.id === count + 1,
      }));
    });
    givenNextCount();
  }
  return (
    <div className="quiz-game">
      <div>
        <div className="rangeBar">
          <span
            className="scoreRange"
            style={{ width: `${Math.min((pointCount / 150) * 100, 100)}%` }}
          ></span>
        </div>
        <div className="counting">
          <p>Question {queCount < 16 ? queCount : 15}/15</p>
          <p>{pointCount}/150 points</p>
        </div>
        {queCount <= 15 ? (
          reactQuestions.map((game) =>
            game.flag === true ? (
              <div key={game.id}>
                <h3 className="question">{game.question}</h3>
                <div className="multiChoiseAns">
                  {game.options.map((opt) => {
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className="answer-option"
                        onClick={() => handleClickAns(opt.id)}
                        style={
                          isRightAns === true
                            ? opt.isCorrect === true
                              ? rightAnsColor
                              : wrongAnsColor
                            : null
                        }
                      >
                        {opt.opts}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null,
          )
        ) : (
          <div className="congrats-container">
            <h1>
              {pointCount > 100
                ? "🎉 Congratulations! 🎉"
                : "Better luck next time"}
            </h1>

            <video autoPlay loop className="congrats-video">
              <source
                src={pointCount > 100 ? celebration : failed}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <h2>Your Score: {pointCount}</h2>
          </div>
        )}

        <div className="semi-result">
          <p className="timer">
            {String(reverseMin).padStart(2, "0")}:
            {reverseSec === 60 ? "00" : String(reverseSec).padStart(2, "0")}
          </p>
          {count < 16 && (
            <button
              style={
                queCount > 16
                  ? {
                      cursor: "not-allowed",
                      background: "linear-gradient(135deg, #8b5cf6, #3b3b3b)",
                    }
                  : null
              }
              type="button"
              className="next-btn"
              onClick={isRightAns && handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
