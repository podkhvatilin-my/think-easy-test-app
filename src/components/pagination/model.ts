export interface PaginationProps {
    page: number
    pageSize: number
    itemsSize: number
    onPageChange: (page: number) => void
}
