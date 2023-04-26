import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App(){
    return <h1>hi there!</h1>
}

root.render(<App/>)