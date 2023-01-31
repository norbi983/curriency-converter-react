import "./style.css";

const Result = ({ amount, rate, currency }) => {
    const result =amount / rate;

    return (
        <p className="form__result">{result.toFixed(2)} {currency}</p>
    );
};

export default Result;