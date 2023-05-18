import styled from "styled-components"
import { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from "../../hooks/globalContext"

function Form() {
    const { addIncome } = useGlobalContext()
    const initialValues = {
        title: '',
        amount: '',
        date: '',
        description: '',
        category: ''
    }
    const [input, setInput] = useState(initialValues)
    const handleInput = (e) => {       
        setInput({...input, [e.target.name]: e.target.value})
    }
    const handleDate = (date) => {
        setInput({...input, date})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(input).
            // eslint-disable-next-line no-unused-vars
            then(data => {
                setInput(initialValues)
            })
    }
    const { title, amount, description, category, date} = input

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
                type="text"
                value={title}
                name={'title'}
                placeholder="Salary Title"
                onChange={handleInput}
            />

        </div>
        <div className="input-control">
            <input 
                type="text"
                value={amount}
                name={'amount'}
                placeholder="Salary Amount"
                onChange={handleInput}
            />
        </div>
        <div className="input-control">
            <DatePicker
                id="date"
                placeholderText="Enter A Date"
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => handleDate(date)}
            />
        </div>
        <div className="input-color">
            <textarea
                name={'description'} 
                value={description} 
                placeholder="Add a description"
                cols="30"
                rows="4"
                onChange={handleInput}
            ></textarea>
        </div>
        <div className="selects input-control">
            <select value={category} name="category" id="category" onChange={handleInput}>
                <option value="" disabled>Select Option</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investments">Investments</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank Transfer</option>
                <option value="youtube">Youtube</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="submit-btn">
            <button>Add Income</button>
        </div>
        
    </FormStyled>
  )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
    }
`

export default Form