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
    // می‌توانید سوالات بیشتر اضافه کنید
];

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [timer, setTimer] = useState(false);

    const handleAnswer = (selectedIndex) => {
        const correctIndex = DATA[currentQuestionIndex].correctOption;
        if (selectedIndex === correctIndex) {
            setScore(score + DATA[currentQuestionIndex].points);
        }
        if (currentQuestionIndex < DATA.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert("Quiz Finished! Your score is: " + score);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleSetTimer = () => {
        setTimer(true);
    };
    const progress = (currentQuestionIndex / DATA.length) * 100;


    return (
        <div>
            {!quizStarted ? (
                <div>
                    <h1>آماده شروع هستی؟</h1>
                    <button onClick={handleStartQuiz}>آماده ام</button>
                    <button onClick={handleSetTimer}>نیاز به تایم دارم</button>
                </div>
            ) : (
                <div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: '#e0e0e0' }}>
                        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'green' }}></div>
                    </div>
                    <h2>{DATA[currentQuestionIndex].question}</h2>
                    <ul>
                        {DATA[currentQuestionIndex].options.map((option, index) => (
                            <li 
                                key={index} 
                                onClick={() => handleAnswer(index)} 
                                style={{ cursor: 'pointer', padding: '10px', margin: '5px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div>Score: {score}</div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
