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
