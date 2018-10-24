import { camelizeKeys } from 'humps'

export default _ => (next: any) => (action: any) => {
  if (action.type.match(/get.*(SUCCESS)$/)) {
    action.payload = camelizeKeys(action.payload)
  }
  next(action)
}
