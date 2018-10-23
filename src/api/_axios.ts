import axios, { AxiosError, AxiosPromise } from 'axios'
import { API, APIConfig } from './API'
import APIResponse from './response'

export default (config: APIConfig): API => {
  const http = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout
  })
  let _retry
  function _wrap<T>(callAPI: () => AxiosPromise<T>): Promise<APIResponse<T>> {
    return callAPI()
      .then(response => {
        return Promise.resolve({
          status: response.status,
          body: response.data
        })
      })
      .catch((error: AxiosError) => {
        if (_retry) {
          return _retry(
            {
              status: error.response.status,
              body: error.response.data,
              error: {
                code: error.code,
                message: error.message
              }
            },
            callAPI
          )
        }
        if (error.response) {
          return Promise.reject({
            status: error.response.status,
            body: error.response.data,
            error: {
              code: error.code,
              message: error.message
            }
          })
        }
        return Promise.reject({
          error: {
            code: error.code
          }
        })
      })
  }
  return {
    setRetryStrategy(
      fallback: (e: APIResponse<any>, retry: () => Promise<APIResponse<any>>) => Promise<APIResponse<any>>
    ) {
      _retry = fallback
    },
    getTest: req => _wrap(() => http.get(`/users?page=${req.page}&per_page=${req.perPage}`))
  }
}
