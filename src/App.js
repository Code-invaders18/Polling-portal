import React from "react";
import { useState } from "react";

const App = () => {
  const question = {
    questionText: "What is the capital of France?",
    totalCounts: 6,
    pollOptions: [
      { pollText: "United State", percent: "60%", count: 1 },
      { pollText: "London", percent: "10%", count: 0 },
      { pollText: "Paris", percent: "20%", count: 2 },
      { pollText: "Dublin", percent: "10%", count: 3 },
    ],
  };

  const [pollQuestion, setPollQuestion] = useState(question.questionText);

  const [totalCounts, setTotalCounts] = useState(question.totalCounts);

  const [pollOptions, setPollOptions] = useState([...question.pollOptions]);

  const [showResults, setShowResults] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePollButtonClick = (index) => {
    
	pollOptions[index].count += 1;
    // console.log(pollOptions);
    var totalCounts = 0;

    for (let i = 0; i < pollOptions.length; i++) {
      totalCounts += pollOptions[i].count;
    }

    var x = 100 / totalCounts;

    for (let i = 0; i < pollOptions.length; i++) {
      var percentage = pollOptions[i].count * x;
      pollOptions[i].percent = `${Math.round(percentage)}%`;
    }
    console.log(pollOptions);
    // pollQuestion.totalCounts = totalCounts;
    setTotalCounts(totalCounts);
    console.log(totalCounts);
    setSelectedIndex(index);
    setShowResults(true);
  };

  return (
    <div className='app'>
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      <>
        <div className='question-section'>
          <div className='question-count'style={{marginLeft:"10px"}}>
            <span>Total Votes: {totalCounts}</span>
          </div>
          <div className='question-text' style={{marginLeft:"10px"}}>{question.questionText}</div>
          {showResults ? (
          <div className='answer-section'>
            {pollOptions.map((pollOption, index) => (
              <div className='answer-section-resultButton'>
                <div
                  className={
                    index === selectedIndex
                      ? `selected-option answer-section-results`
                      : `unselected-option answer-section-results`
                  }
                  style={{ width: `${pollOption.percent}`}}
                  >{pollOption.pollText}{" "}{pollOption.percent}
                  {/* <div style={{ width: `${pollOption.percent}`, backgroundColor: "red" }}></div> */}
                  {/* <div>{pollOption.pollText}</div> */}
                  {/* <div className="floating">{pollOption.percent}</div> */}
                  
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='answer-section'>
            {pollOptions.map((pollOption, index) => (
              <div
                className='answer-section-button'
                onClick={() => handlePollButtonClick(index)}>
                {pollOption.pollText}
              </div>
            ))}
          </div>
        )}
        </div>
        
      </>
    </div>
  );
};

export default App;
