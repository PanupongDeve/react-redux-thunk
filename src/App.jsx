import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { connect } from 'react-redux';
import { increate, decreate } from './redux/count/count.action'
import { fetchData } from './redux/sample-data/sample-data.actions'


function App(props) {
  const [count, setCount] = useState(0)
  console.log('props', props)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{props.count}</p>
        <button onClick={() => props.increate(props.count)}>+</button> <button onClick={() => props.decreate(props.count)}>-</button>
      </div>

      <div className="card">
        <button onClick={() => props.fetchData({
          message: 'external value'
        })}>Fetch Data</button>
      </div>

    </div>
  )
}



const mapStateToProps = ({ count, sampleData }) => { 
  return { count, sampleData }
}

const mapDispatchToProps = dispatch => ({
  increate: (count) => dispatch(increate(count)),
  decreate: (count) => dispatch(decreate(count)),
  fetchData: (externalValue) => dispatch(fetchData(externalValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
