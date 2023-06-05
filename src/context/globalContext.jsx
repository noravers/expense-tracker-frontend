import { createContext, useState, useContext } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"
export const GlobalContext = createContext()

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)


    const addIncome = async(income) => {
        await axios.post(`${BASE_URL}/add-income`, income)
            .catch((err) => {
                console.log(err, 'error')
                setError(err.response.data.message)
            })
    }

    const getIncomes = async() => {
        await axios.get(`${BASE_URL}/get-incomes`)
            .then(response => {
                setIncomes(response.data)
            })
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    const addExpense = async(expense) => {
        await axios.post(`${BASE_URL}/add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    const getExpenses = async() => {
        await axios.get(`${BASE_URL}/get-expenses`)
            .then(response => {
                setExpenses(response.data)
            })
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}/delete-income/${id}`)
    }

    const deleteExpense = async(id) => {
        await axios.delete(`${BASE_URL}/delete-expenses/${id}`)
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach(e => {
           totalIncome += e.amount
        })
        return totalIncome
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach(e => {
            totalExpense += e.amount
        })
        return totalExpense
    }   

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        return history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,3)
    }


    return (
        <GlobalContext.Provider value={{
                addIncome,
                getIncomes,
                deleteIncome,
                totalIncome,
                getExpenses,
                deleteExpense,
                totalExpense,
                addExpense,
                incomes,
                expenses,
                transactionHistory
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

