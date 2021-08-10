export type EmployeeType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

type ContactsType = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string
}

type PhotosType = {
  small: string | null
  large: string | null
}