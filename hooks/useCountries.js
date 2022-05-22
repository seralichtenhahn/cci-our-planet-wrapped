import { fetcher } from '@/utils/universal'
import useSWRImmutable from 'swr/immutable'

const useCountries = () => {
  return useSWRImmutable('/api/countries', fetcher)
}

export default useCountries
