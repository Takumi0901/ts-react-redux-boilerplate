import { decamelizeKeys } from 'humps'

export default _ => (next: any) => (action: any) => {
  if (action.type.match(/post.*REQUEST$/)) {
    action.payload = decamelizeKeys(action.payload)
  }
  next(action)
}
