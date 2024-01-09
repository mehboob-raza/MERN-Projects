import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [apiData, setApiData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    // this controller cancels the old request 
    const controller = new AbortController()
      ; (async() => {
      try {
        setLoading(false)
        setError(false) // it must be false in try section
        const res = await axios.get('/api/products?search=' + search, {
          signal : controller.signal
        })
        console.log(res.data);
        setApiData(res.data)
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request Cancelled', err.message);
          return
        }
        setError(true)
        setLoading(false) 
      }
    })()

    // cleanup 
    return () => {
      controller.abort()
    }
  }, [search])

  if (error) {
    return <h1>Error occured</h1>
  }
  if (loading) {
    return <h1>Loading.....</h1>
  }


  return (
    <>
      <div>
        <h3>Find Entry</h3>
        <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h1>There are  {apiData.length} Enteries </h1>
    </>
  )
}

export default App
