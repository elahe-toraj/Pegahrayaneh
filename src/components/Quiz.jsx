import React, { useState } from 'react';

const DATA = [
    {
        "question": "Which is the most popular JavaScript framework?",
        "options": ["Angular", "React", "Svelte", "Vue"],
        "correctOption": 1,
        "points": 10
    },
    {
        "question": "What does HTML stand for?",
        "options": ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
        "correctOption": 0,
        "points": 10
    },
];

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [score, setScore] = useState(0); 
    const [quizStarted, setQuizStarted] = useState(false); 
    const [quizFinished, setQuizFinished] = useState(false); 
    const [timer, setTimer] = useState(false); 

    const handleAnswer = (selectedIndex) => {
        const correctIndex = DATA[currentQuestionIndex].correctOption; 
        if (selectedIndex === correctIndex) {
            setScore(score + DATA[currentQuestionIndex].points); 
        }

        if (currentQuestionIndex < DATA.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true); 
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true); 
    };

    const handleSetTimer = () => {
        setTimer(true); 
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1); 
        }
    };

    const progress = (currentQuestionIndex / DATA.length) * 100;

    return (
        <div className="quiz-container">
            
            {!quizStarted ? (
                <div className="quiz-running">
                    <h1>آماده شروع هستی؟</h1>
                    <div className="quiz-buttons">
                        <button onClick={handleStartQuiz}>آماده ام</button>
                        <button onClick={handleSetTimer}>نیاز به تایم دارم</button>
                    </div>
                </div>
            ) : quizFinished ? (
                <div className="quiz-running">
                    <h1>کوییز تمام شد!</h1>
                    <p>امتیاز نهایی شما: {score}</p>
                    <p>{score === DATA.length * 10 ? "عالی! همه سوالات رو درست جواب دادی!" : "خوب بود! امیدوارم دفعه بعد بهتر بشی!"}</p>
                    <button onClick={() => window.location.reload()} className="restart-btn">شروع مجدد</button>
                </div>
            ) : (
                <div className="quiz-running">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <h2 className="question">{DATA[currentQuestionIndex].question}</h2> 
                    <ul className="options-list">
                        {DATA[currentQuestionIndex].options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleAnswer(index)} 
                                className="option-item"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className="score-display">Score: {score}</div>

                    {currentQuestionIndex > 0 && (
                        <button onClick={handlePreviousQuestion} className="previous-btn">قبلی</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quiz;
