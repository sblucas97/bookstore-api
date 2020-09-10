import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import Row from 'components/Row'
import Column from 'components/Column'
import Input from 'components/Input'
import Button from 'components/Button'

import { createBook } from 'services/books'

const schema = Yup.object().shape({
  title: Yup.string().required(),
  author: Yup.string().required(),
  copies: Yup.number()
})

const CreateBook = () => {
  const history = useHistory()
  const { register, handleSubmit, errors, setValue } = useForm({
    validationSchema: schema,
    defaultValues: {
      // title: 'Title defaultvalue'
    }
  })
  const onSubmit = async values => {
    try {
      const response = await createBook(values)
      history.push('/home')
    } catch (e) {
      console.log(e)
    }
  }

  // useEffect(() => {
  //   //TODO: useHistory pegar os parametros
  //   // se existe id, fazer request pra API
  // }, [])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row width={1} justifyContent='center' mt={50}>
        <Column width={1 / 3}>
          <Input width={1} name='title' register={register} label='Titulo' error={errors.title?.message} />
          <Input width={1} name='author' register={register} label='Autor' error={errors.author?.message} />
          <Input
            width={1}
            name='copies'
            register={register}
            type='number'
            label='Numero de copias'
            error={errors.copies?.message}
          />
          <Button type='submit' backgroundColor='#34128a' color='#fff'>
            Criar livro
          </Button>
        </Column>
      </Row>
    </form>
  )
}

export default CreateBook
