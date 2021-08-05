export type EmployeeType = {
  id: number
  name: string
  status: string
  photos: {
    small: string | null
    large: string | null
  }
  followed: boolean
}
