export interface IUsers {
  page: number
  perPage: number
  list: IUser[]
}

export interface IUser {
  description?: string
  facebookId?: string
  followeesCount?: number
  followersCount?: number
  githubLoginName?: string
  id?: string
  itemsCount?: number
  linkedinId?: string
  location?: string
  name?: string
  organization?: string
  permanentId?: number
  profileImageUrl?: string
  twitterScreenName?: string
  websiteUrl?: string
}
