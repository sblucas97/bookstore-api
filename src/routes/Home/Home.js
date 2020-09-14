import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Row from 'components/Row'
import Column from 'components/Column'

import { getBooks, deleteBook } from 'services/books'

const Home = () => {
  const history = useHistory()
  const [books, setBooks] = useState([])

  const handleDeleteBook = async id => {
    try {
      await deleteBook(id)
      const { data } = await getBooks()
      setBooks(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const handleGetBooks = async () => {
      try {
        const { data } = await getBooks()
        setBooks(data)
      } catch (e) {
        console.log(e)
      }
    }

    handleGetBooks()
  }, [])

  return (
    <Row width={1} alignItems='center' justifyContent='center'>
      <Column>
        {books?.map(item => (
          <div key={item.id}>
            {item.title} <button onClick={() => handleDeleteBook(item.id)}>X</button>
            <button onClick={() => history.push('/create-book', item)}>EDIT</button>
          </div>
        ))}
        <button onClick={() => history.push('/create-book')}>criar livro</button>
      </Column>
    </Row>
  )
}

export default Home
