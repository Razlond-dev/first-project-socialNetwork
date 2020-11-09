export type postType = {
  id: number
  message: string
  likesCount: number
}
export type contactsType = {
  gitHub: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null
  large: string | null
}
export type profileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: contactsType
  photos: PhotosType
  aboutMe: string
}

export type userType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}