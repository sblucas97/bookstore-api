import api from 'providers/fetchBooks'

export const getBooks = () => api.get('/books')
export const createBook = payload => api.post('/books', payload)
export const deleteBook = id => api.delete(`/books/${id}`)
export const updateBook = (id, payload) => api.put(`/books/${id}`, payload)
