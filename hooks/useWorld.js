import { fetcher } from '@/utils/universal'
import useSWRImmutable from 'swr/immutable'

const useWorld = () => {
  return useSWRImmutable('/api/data/world', fetcher)
}

export default useWorld
