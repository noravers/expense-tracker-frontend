import styled from "styled-components"
import { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from "../../hooks/globalContext"
import Button from "../Button/Button"
import { plus } from "../../utils/icons"

// eslint-disable-next-line react/prop-types
function Form({section}) {
    const { addIncome, getIncomes, addExpense, getExpenses } = useGlobalContext()
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
    const handleSubmit = async e => {
        e.preventDefault();
        if (section === "incomes") {
            addIncome(input)
                // eslint-disable-next-line no-unused-vars
                .then(e => getIncomes()); 
            setInput(initialValues)
        }
        if(section === "expenses"){
            addExpense(input)
                // eslint-disable-next-line no-unused-vars
                .then(e => getExpenses());
            setInput(initialValues)
        }
    }
    const { title, amount, description, category, date} = input
    console.log(section, 'section')

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
                type="text"
                value={title}
                name={'title'}
                placeholder={ section === "expenses" ? "Expense Title" : "Salary Title"}
                onChange={handleInput}
            />

        </div>
        <div className="input-control">
            <input 
                type="text"
                value={amount}
                name={'amount'}
                placeholder={section === "expenses" ? "Expense Amount" : "Salary Amount"}
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
        <div className="selects input-control">
            {
                section === 'incomes' && (
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
                )
            } 
            {
                section === 'expenses' && (
                    <select value={category} name="category" id="category" onChange={handleInput}>
                        <option value="" disabled>Select Option</option>
                        <option value="education">Education</option>
                        <option value="groceries">Groceries</option>
                        <option value="health">Health</option>
                        <option value="subscription">Subscription</option>
                        <option value="takeaways">Takeaways</option>
                        <option value="clothing">Clothing</option>
                        <option value="traveling">Traveling</option>
                        <option value="other">Other</option>
                    </select>
                )
            }
        </div>
         <div className="input-color">
            <textarea
                name={'description'} 
                value={description} 
                placeholder="Add a reference"
                cols="30"
                rows="4"
                onChange={handleInput}
            ></textarea>
        </div>
        <div className="submit-btn">
            <Button
                name={section === "incomes" ? 'Add Income' : 'Add Expense'}
                icon={plus}
                bPad={'.8rem 1.6rem'}
                bRad={'30px'}
                color={'#fff'}
                bg={'var(--color-accent)'}
            />
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
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, .9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4)
        }
    }
    .input-control {
        input {
            width: 100%
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        select {
            color: rgba(34, 34, 96, .4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1)
            }
        }
    }
    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover {
                background: rgba(34, 34, 96, 1) !important;
                // color: rgba(34, 34, 96, 1) !important;
            }
        }
    }
`

export default Form