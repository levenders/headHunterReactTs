import { TPersonResponse, TPerson } from '../types'

interface ISortPersonsProps {
  persons: TPerson[]
  by: 'name' | 'phone' | 'id'
}

export const sortPersons = ({ persons, by }: ISortPersonsProps) => {
  const sortedArray = [...persons]
  return sortedArray.sort((a: TPerson, b: TPerson) => {
    if (a[by] < b[by]) {
      return -1
    } else return 1
  })
}

export const formatPersonResponse = (
  personResponse: TPersonResponse
): TPerson => {
  return {
    id: personResponse.id,
    name: personResponse.name,
    email: personResponse.email,
    phone: personResponse.phone,
  }
}
