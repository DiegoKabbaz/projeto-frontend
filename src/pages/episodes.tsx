import { useState, useEffect } from 'react'
import api from '../api/server'
import { Card, Container, Grid, Title } from './style-episode';
import { Pagination } from '../components/pagination';

interface Props {
  title?: string;
}

interface Episode {
  id: number
  name: string
  episode: string
  air_date: string
}

interface Props {
  title?: string;
}

export function Episodes({ title }: Props) {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages] = useState<number>(1)
  

  useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true)
      setError(null)

      const response = await api.get('/episode?page=1')
      setEpisodes(response.data.results)
    } catch (error) {
      setError('Erro ao carregar episódios')
    } finally {
      setLoading(false)
    }
  }
  fetchData()
}, [])

  return (
    <>
    <Container>
      <Title>{title ?? 'Episódios'}</Title>

      {loading && <p>Carregando episódios...</p>}
      {error && <p>{error}</p>}

      <Grid>
        {!loading && !error && episodes.map(ep => (
          <Card to={`/episodesDetails/${ep.id}`} key={ep.id}>
            <strong>{ep.name}</strong>
            <p>Episódio: <span>{ep.episode}</span></p>
            <p>Data Exibição: <span>{ep.air_date}</span></p>
          </Card>
        ))}
      </Grid>
    </Container>
     <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}


