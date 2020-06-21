import React , {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const AddTransaction = () => {
    const [amount, setAmount] = useState(0);
    const [text, settext] = useState("");
    const {addTransaction} = useContext(GlobalContext);

    function onSubmit(e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount : +amount
        }
        addTransaction(data);
    }

    return(
        <div>
            <h3>Add new transaction</h3>
        <form onSubmit={ onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text}  onChange={(e) => settext(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
            </div>
    );
}

export default AddTransaction;



