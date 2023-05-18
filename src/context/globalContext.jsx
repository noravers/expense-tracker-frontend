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
        console.log(income, 'income')
        const response = await axios.post(`${BASE_URL}/add-income`, income)
            .catch((err) => {
                console.log(err, 'error')
                setError(err.response.data.message)
            })
        console.log(response, 'response')
    }
    return (
        <GlobalContext.Provider value={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}

