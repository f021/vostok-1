import Maps from './maps'

// getAddressBook :: { Playground } -> { Pattern } -> [ [ Int ] ]
const getAddressBook = (scene, pattern) =>
  Maps(scene).getIndexMaps(
    Maps(pattern).getVectorMap(pattern.arr, pattern.startPoint)
  )

export default getAddressBook
