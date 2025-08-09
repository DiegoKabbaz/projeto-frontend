import { Pagination } from '../components/pagination'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardList, Container, Title } from './style-location'

interface Location {
  id: number
  name: string
  type: string
  dimension: string
}

export function ListaLocalizacoes() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [localizacoes, setLocalizacoes] = useState<Location[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLocations() {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
        setLocalizacoes(response.data.results)
        setTotalPages(response.data.info.pages)
      } catch (err) {
        setError('Erro ao carregar as localizações')
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [currentPage])

  return (
    <Container>
      <Title>Localizações</Title>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <CardList>
        {!loading && !error && localizacoes.map(loc => (
          <Card to={`/detalhes/${loc.id}`} key={loc.id}>
            <strong>{loc.name}</strong>
            <p>Tipo: <span>{loc.type}</span></p>
            <p>Dimensão: <span>{loc.dimension}</span></p>
          </Card>
        ))}
      </CardList>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  )
}
