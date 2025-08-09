import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, PageInfo, PaginationContainer } from './style-pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange } : PaginationProps) {
  return (
    <PaginationContainer>
      <Button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        Primeira Página
      </Button>

      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft />
      </Button>

      <PageInfo>
        Página {currentPage} de {totalPages}
      </PageInfo>

      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRight />
      </Button>
    </PaginationContainer>
  )
}
