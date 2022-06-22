import { useState } from 'react';

const Button = ({onClick, text}) => {
    return(
        <button onClick={onClick}> {text}  </button>
    )
    
}

const StatisticLine = ({text, value}) => {
    if (text === "positive") {
        return (
            <tr>
              <td>{text}</td>
              <td>{value} %</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <table>
                <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="all" value={props.all}/>
                <StatisticLine text="average" value={props.average}/>
                <StatisticLine text="positive" value={props.positive}/>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    return(
        <div>
            <h1>Give feedback</h1>
            <Button text="Good" onClick={() => setGood(good+1)}/>
            <Button text="Neutral" onClick={() => setNeutral(neutral+1)}/>
            <Button text="Bad" onClick={() => setBad(bad+1)}/>
            <h2>Statistics</h2>
            <Statistics
                good={good} 
                neutral={neutral} 
                bad={bad} 
                all={good + neutral + bad} 
                average={(good - bad)/ (good + neutral + bad)} 
                positive={good / (good + neutral + bad)} 
            />
        </div>
    )
}

export default App;
