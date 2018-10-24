export default interface APIResponse<T> extends APIError {
  status: number
  body?: T
  error?: {
    code?: string
    message?: string
  }
  errors?: string[]
}

export interface APIError {
  error?: {
    code?: string
    message?: string
  }
  errors?: string[]
}

export interface User {
  description?: string
  facebook_id?: string
  followees_count?: number
  followers_count?: number
  github_login_name?: string
  id?: string
  items_count?: number
  linkedin_id?: string
  location?: string
  name?: string
  organization?: string
  permanent_id?: number
  profile_image_url?: string
  twitter_screen_name?: string
  website_url?: string
}
