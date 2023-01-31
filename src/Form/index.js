import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "../Result";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].code);
    const rate = currencies.find(({ code }) => code === currency).rate;

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`${amount} ${currency}`);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <p>
                    <label className="form__label">
                        <span className="form__fieldNumber">
                            Kwota
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            min="0.01"
                            required
                            step="0.01"
                            placeholder="Wymagane pole" /> PLN
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        Waluta
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            className="form__fieldSelect"
                        >
                            {currencies.map((currency) => (
                                <option
                                    key={currency.code}
                                    value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
            </fieldset>
            <Result
                amount={amount}
                rate={rate}
                currency={currency}
            />
        </form >
    );
};

export default Form;
