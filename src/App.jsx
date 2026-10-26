import { useEffect, useReducer, useState } from "react";
import reactIcon from "./assets/react.svg";
import "./App.css";
import Quizgame from "./Quizgame";
import Quizstartpage from "./Quizstartpage";

export default function App() {
  const [reactQuestions, setReactQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      options: [
        {
          id: 1,
          opts: "A JavaScript library for building UIs",
          isCorrect: true,
        },
        { id: 2, opts: "A database", isCorrect: false },
        { id: 3, opts: "A CSS framework", isCorrect: false },
        { id: 4, opts: "A programming language", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 2,
      question: "What is JSX?",
      options: [
        { id: 1, opts: "A syntax extension for JavaScript", isCorrect: true },
        { id: 2, opts: "A database query language", isCorrect: false },
        { id: 3, opts: "A CSS library", isCorrect: false },
        { id: 4, opts: "A browser API", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 3,
      question: "Which hook is used for state management?",
      options: [
        { id: 1, opts: "useEffect", isCorrect: false },
        { id: 2, opts: "useState", isCorrect: true },
        { id: 3, opts: "useMemo", isCorrect: false },
        { id: 4, opts: "useRef", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 4,
      question: "Which hook is used for side effects?",
      options: [
        { id: 1, opts: "useMemo", isCorrect: false },
        { id: 2, opts: "useRef", isCorrect: false },
        { id: 3, opts: "useEffect", isCorrect: true },
        { id: 4, opts: "useState", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 5,
      question: "What is the Virtual DOM?",
      options: [
        { id: 1, opts: "A lightweight copy of the real DOM", isCorrect: true },
        { id: 2, opts: "A CSS engine", isCorrect: false },
        { id: 3, opts: "A browser extension", isCorrect: false },
        { id: 4, opts: "A custom HTML tag", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 6,
      question: "What are Props in React?",
      options: [
        { id: 1, opts: "Functions", isCorrect: false },
        { id: 2, opts: "Data passed to components", isCorrect: true },
        { id: 3, opts: "Hooks", isCorrect: false },
        { id: 4, opts: "State values", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 7,
      question: "What is State in React?",
      options: [
        { id: 1, opts: "Component local data", isCorrect: true },
        { id: 2, opts: "CSS styles", isCorrect: false },
        { id: 3, opts: "Database values", isCorrect: false },
        { id: 4, opts: "Props", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 8,
      question: "Which library is commonly used for routing in React?",
      options: [
        { id: 1, opts: "Redux", isCorrect: false },
        { id: 2, opts: "Axios", isCorrect: false },
        { id: 3, opts: "React Router", isCorrect: true },
        { id: 4, opts: "Lodash", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 9,
      question: "Why are keys used in React lists?",
      options: [
        { id: 1, opts: "To style components", isCorrect: false },
        { id: 2, opts: "To identify items uniquely", isCorrect: true },
        { id: 3, opts: "To create routes", isCorrect: false },
        { id: 4, opts: "To store state", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 10,
      question: "What is React Fragment?",
      options: [
        { id: 1, opts: "A State Hook", isCorrect: false },
        {
          id: 2,
          opts: "Grouping elements without extra DOM nodes",
          isCorrect: true,
        },
        { id: 3, opts: "A Router", isCorrect: false },
        { id: 4, opts: "A Redux feature", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 11,
      question: "Which hook accesses Context values?",
      options: [
        { id: 1, opts: "useContext", isCorrect: true },
        { id: 2, opts: "useReducer", isCorrect: false },
        { id: 3, opts: "useState", isCorrect: false },
        { id: 4, opts: "useEffect", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 12,
      question: "Which hook memoizes a value?",
      options: [
        { id: 1, opts: "useMemo", isCorrect: true },
        { id: 2, opts: "useCallback", isCorrect: false },
        { id: 3, opts: "useRef", isCorrect: false },
        { id: 4, opts: "useEffect", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 13,
      question: "Which hook memoizes a function?",
      options: [
        { id: 1, opts: "useMemo", isCorrect: false },
        { id: 2, opts: "useCallback", isCorrect: true },
        { id: 3, opts: "useEffect", isCorrect: false },
        { id: 4, opts: "useContext", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 14,
      question: "What is Redux mainly used for?",
      options: [
        { id: 1, opts: "Routing", isCorrect: false },
        { id: 2, opts: "Global State Management", isCorrect: true },
        { id: 3, opts: "Testing", isCorrect: false },
        { id: 4, opts: "Styling", isCorrect: false },
      ],
      flag: false,
    },
    {
      id: 15,
      question: "Which of the following is NOT a built-in React Hook?",
      options: [
        { id: 1, opts: "useState", isCorrect: false },
        { id: 2, opts: "useEffect", isCorrect: false },
        { id: 3, opts: "useFetch", isCorrect: true },
        { id: 4, opts: "useContext", isCorrect: false },
      ],
      flag: false,
    },
  ]);

  const initialState = {
    play: false,
    reverseMin: 9,
    reverseSec: 59,
    tickCount: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { play, reverseMin, reverseSec, tickCount } = state;
  function reducer(state, action) {
    switch (action.type) {
      case "letsStart":
        return { ...state, play: true };
      case "tick":
        return {
          ...state,
          reverseMin: state.reverseMin - 1,
        };
      case "tickSec":
        return {
          ...state,
          reverseSec:
            state.reverseSec === 0
              ? (state.reverseSec = 59)
              : state.reverseSec - 1,
        };
      case "stopTime":
        return { ...state, reverseMin: "00", reverseSec: "00" };
      case "tickCount":
        return { ...state, tickCount: state.tickCount + 1 };
      default:
        return;
    }
  }
  function letsStart() {
    dispatch({ type: "letsStart" });
    setReactQuestions((prev) =>
      prev.map((question, index) => ({
        ...question,
        flag: index === 0,
      })),
    );
  }

  useEffect(() => {
    if (!play) return;
    let timer;
    if (tickCount < 16) {
      timer = setInterval(() => {
        if (reverseMin > 0) {
          dispatch({ type: "tick" });
        } else {
          dispatch({ type: "stopTime" });
        }
      }, 60000);
    }

    return () => clearInterval(timer);
  }, [play, reverseMin]);

  useEffect(() => {
    if (!play) return;
    let timer;

    if (tickCount < 16) {
      timer = setInterval(() => {
        if (reverseMin > 0) {
          dispatch({ type: "tickSec" });
        } else {
          dispatch({ type: "stopTime" });
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [play, reverseSec]);

  function givenNextCount() {
    dispatch({ type: "tickCount" });
  }

  return (
    <section className="quiz-startpage">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="quiz-icon-wrap">
            <img src={reactIcon} alt="React quiz logo" className="quiz-icon" />
          </div>
          <span className="quiz-tag">React Fundamentals</span>
        </div>

        <h1 className="quiz-title">THE REACT QUIZ</h1>
        {play ? (
          <Quizgame
            reactQuestions={reactQuestions}
            reverseMin={reverseMin}
            reverseSec={reverseSec}
            setReactQuestions={setReactQuestions}
            givenNextCount={givenNextCount}
          />
        ) : (
          <Quizstartpage letsStart={letsStart} />
        )}
      </div>
    </section>
  );
}
