export interface IUsers {
  page: number
  perPage: number
  list: IUser[]
}

export interface IUser {
  description?: string
  facebook_id?: number
  followees_count?: number
  followers_count?: number
  github_login_name?: string
  id?: string
  items_count?: number
  linkedin_id?: number
  location?: string
  name?: string
  organization?: string
  permanent_id?: number
  profile_image_url?: string
  twitter_screen_name?: string
  website_url?: string
}
