import config from './config'
import axios from './_axios'
import APIResponse from './response'
import { IUser } from '../redux/users/types'

export interface APIConfig {
  baseURL: string
  timeout?: number
  headers?: APIHeader[]
}

export interface APIHeader {
  name: string
  value: string
}

export interface API {
  setRetryStrategy: (
    fallback: (e: APIResponse<any>, retry: () => Promise<APIResponse<any>>) => Promise<APIResponse<any>>
  ) => void
  getTest: (req: { page: number; perPage: number }) => Promise<APIResponse<IUser[]>>
}

export const factory = (config: APIConfig): API => {
  // TODO implement chnage if library chnage.
  return axios(config)
}

// deafult
export default factory({
  baseURL: config.baseAPIUrl
})
