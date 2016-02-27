
import { add, sub } from 'poyekhali'

import Field from './field'

const Maps = ({ w, h, flag = true }) => {

  const { x, xy } = Field({ w, h, flag })

  // getVectorMap :: [ Int ] -> Int -> [ { Vector } ]
  const getVectorMap = (arr, start) =>
    arr.reduce((acc, n, i) =>
      n ? [...acc, sub(xy(i), xy(start))] : acc, [])

  // getMap :: [ Vector ] -> Vector -> [ Int ]
  const getIndexMap = (arr, pos) =>
     arr.reduce((acc, n) => {
       n = x(add(n, pos))
       return n !== undefined ? [...acc, n] : acc
     }, [])

  // getIndexMaps :: [ Vektor ] -> [ [ Int ] ]
  const getIndexMaps = arr =>
    Array.from(new Array(w * h), (_, i) =>
      getIndexMap(arr, xy(i)))

  return {
    getIndexMap,
    getIndexMaps,
    getVectorMap
  }
}

export default Maps
