import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sum from '../components/Sum'
import Exp from '../components/Exp.jsx'
import Cohort from '../components/Cohort.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> 
        <Exp/>
        <Cohort />
    */}
    
    <Sum/>
    

  </React.StrictMode>,
)
