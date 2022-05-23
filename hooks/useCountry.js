import { fetcher } from '@/utils/universal'
import { useRouter } from 'next/router'
import useSWRImmutable from 'swr/immutable'

const useCountry = (countrySlug = '') => {
  const router = useRouter()

  if (!countrySlug) {
    countrySlug = router.query.country
  }

  return useSWRImmutable(
    countrySlug ? `/api/data/${countrySlug}` : null,
    fetcher,
  )
}

export default useCountry
