import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import clsx from 'clsx'

import type { FC } from 'react'
import type { PaginationProps } from './model'

export const Pagination: FC<PaginationProps> = (props) => {
    const { page, pageSize, itemsSize, onPageChange } = props

    const [searchParams, setSearchParams] = useSearchParams()

    const totalPages = Math.ceil(itemsSize / pageSize)
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    const firstPageNumber = pageNumbers[0]
    const lastPageNumber = pageNumbers[pageNumbers.length - 1]
    const isPrevButtonDisabled = page === firstPageNumber
    const isNextButtonDisabled = page === lastPageNumber

    const handlePageChange = (nextPage: number) => {
        onPageChange(nextPage)
        searchParams.set('page', nextPage.toString())
        setSearchParams(searchParams)
    }
    const handlePrevPageClick = () => {
        const nextPage = page - 1 < firstPageNumber ? firstPageNumber : page - 1

        handlePageChange(nextPage)
    }
    const handleNextPageClick = () => {
        const nextPage = page + 1 > lastPageNumber ? lastPageNumber : page + 1

        handlePageChange(nextPage)
    }

    useEffect(() => {
        if (!searchParams.has('page')) return

        const searchPage = +(searchParams.get('page') as string)

        if (!Number.isNaN(searchPage) && page !== searchPage) {
            let nextPage = searchPage

            if (searchPage < firstPageNumber) {
                nextPage = firstPageNumber
            } else if (searchPage > lastPageNumber) {
                nextPage = lastPageNumber
            }

            handlePageChange(nextPage)
        }
    }, [])

    return (
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
                type="button"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={handlePrevPageClick}
                disabled={isPrevButtonDisabled}
            >
                <span className="sr-only">Previous</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path
                        fillRule="evenodd"
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className="inline-flex flex-wrap -space-x-px">
                {pageNumbers.map((pageNumber) => {
                    return (
                        <button
                            key={pageNumber}
                            type="button"
                            className={clsx(
                                'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
                                {
                                    'z-10 text-white bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500':
                                        pageNumber === page,
                                }
                            )}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    )
                })}
            </div>
            <button
                type="button"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={handleNextPageClick}
                disabled={isNextButtonDisabled}
            >
                <span className="sr-only">Next</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </nav>
    )
}
