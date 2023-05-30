import { createContext, useState, useContext } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"
export const GlobalContext = createContext()

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    console.log(incomes, 'globalcontext incomes')

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
                console.log(response.data, 'data')
                setIncomes(response.data)
            })
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}/delete-income/${id}`)
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach(e => {
           totalIncome += e.amount
        })
        return totalIncome
    }
    


    return (
        <GlobalContext.Provider value={{
                addIncome,
                getIncomes,
                deleteIncome,
                totalIncome,
                incomes
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

