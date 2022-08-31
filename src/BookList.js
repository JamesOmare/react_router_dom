import React, {useState} from "react"
import {Link} from 'react-router-dom'

export const BookList = () => {
  const [number, setNumber] = useState(3)
  return (
    <div>
      <h1>BookList</h1>
      <Link to = '/book/1'>Book 1 </Link>
      <br/>
      <Link to = '/book/2'>Book 2</Link>
      <br/>
      <Link to = {`/book/${number}`}>Book {number}</Link>
      <br/>
      <Link to = '/book/new'>New Book</Link>
      <br/>
      <input
      
        type = 'number'
        value = {number}
        onChange = {e => setNumber(e.target.value)}
      
      />
    </div>
  
  )
} 