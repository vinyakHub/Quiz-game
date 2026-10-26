export default function Quizstartpage({ letsStart }) {
  return (
    <>
      <h2 className="quiz-subtitle">Welcome to The React Quiz!</h2>
      <p className="quiz-description">
        15 questions to test your React mastery
      </p>

      <div className="quiz-stats" aria-label="Quiz details">
        <div className="quiz-stat">
          <strong>15</strong>
          <span>Questions</span>
        </div>
        <div className="quiz-stat">
          <strong>10 min</strong>
          <span>Time</span>
        </div>
        <div className="quiz-stat">
          <strong>1x</strong>
          <span>Attempt</span>
        </div>
      </div>

      <button type="button" className="quiz-start-button" onClick={letsStart}>
        Let&apos;s start
      </button>
    </>
  );
}
