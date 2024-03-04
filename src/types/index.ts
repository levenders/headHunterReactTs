export type TPerson = {
  id: number
  name: string
  email: string
  phone: string
}

export type TPhotoResponse = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

type TAdressResponse = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

type TCompanyResponse = {
  name: string
  catchPharse: string
  bs: string
}

export type TPersonResponse = {
  id: number
  name: string
  username: string
  email: string
  address: TAdressResponse
  phone: string
  website: string
  company: TCompanyResponse
}
