import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Row from 'components/Row'
import Column from 'components/Column'

import { getBooks, deleteBook } from 'services/books'

const Home = () => {
  const history = useHistory()
  const [books, setBooks] = useState([])

  const handleDeleteBook = async id => {
    try {
      await deleteBook(id)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const handleGetBooks = async () => {
      try {
        const {
          data: { data }
        } = await getBooks()

        setBooks(data)
      } catch (e) {
        console.log(e)
      }
    }

    handleGetBooks()
  }, [])

  if (books.length === 0) return <div>carregando</div>

  return (
    <Row width={1} alignItems='center' justifyContent='center'>
      <Column>
        {books.map(item => (
          <div>
            {item.title} <button onClick={() => handleDeleteBook(item.id)}>X</button>
          </div>
        ))}
        <button onClick={() => history.push('/create-book')}>criar livro</button>
      </Column>
    </Row>
  )
}

export default Home
