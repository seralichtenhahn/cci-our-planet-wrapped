import { useRouter } from 'next/router'

const totalPages = 7

const useSlideNavigation = ({ variant }) => {
  const router = useRouter()
  const { country } = router.query

  const basePath = `/slides/${router.query.country}/`

  const currentPage = Number(router.pathname.split('/').at(-1)) || 0
  const prevPage = currentPage > 1 ? currentPage - 1 : ''
  const nextPage = currentPage + 1

  const href =
    variant === 'next'
      ? `/slides/${country}/${nextPage}`
      : `/slides/${country}${prevPage ? '/' : ''}${prevPage}`

  const isDisabled = href === router.asPath

  return { isDisabled, href, basePath, totalPages, currentPage }
}

export default useSlideNavigation
