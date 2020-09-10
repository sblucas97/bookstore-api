import api from 'providers/fetchClient2'

export const getBooks = () => api.get('/books')
export const createBook = payload => api.post('/books', payload)
export const deleteBook = id => api.delete(`/books/${id}`)
