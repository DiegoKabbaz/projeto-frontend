// pages/localizacoes/[id].tsx
import { Link, useNavigate, useParams} from 'react-router-dom'
import { CircleArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BackButton, Card, CardGrid, CharacterCard, CharacterImage, Container, Footer, Header, SectionTitle, Title } from './style-location-details'

interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[] 
}

interface Resident {
  id: number
  name: string
  image: string
  species: string
  status: string
  location: { name: string }
}

export function DetalheLocalizacao() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [localizacao, setLocalizacao] = useState<Location | null>(null)
  const [residentes, setResidentes] = useState<Resident[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchLocationDetails() {
      setLoading(true)
      setError(null)

      try {
        const locationResponse = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        const locationData: Location = locationResponse.data
        setLocalizacao(locationData)

        const residentIds = locationData.residents.map(url => url.split('/').pop()).filter(Boolean)

        if (residentIds.length > 0) {
          const idsString = residentIds.join(',')

          const residentsResponse = await axios.get(`https://rickandmortyapi.com/api/character/${idsString}`)

          const residentsData = Array.isArray(residentsResponse.data)
            ? residentsResponse.data
            : [residentsResponse.data]

          setResidentes(residentsData)
        } else {
          setResidentes([])
        }
      } catch (err) {
        setError('Erro ao carregar detalhes da localização.')
      } finally {
        setLoading(false)
      }
    }

    fetchLocationDetails()
  }, [id])

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <CircleArrowLeft size={25} />
      </BackButton>

      <Title>Detalhes da Localização</Title>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {localizacao && (
        <CharacterCard>
          <h3><strong>{localizacao.name}</strong></h3>
          <p>Tipo: <span>{localizacao.type}</span></p>
          <p>Dimensão: <span>{localizacao.dimension}</span></p>
        </CharacterCard>
      )}

      <SectionTitle>Residentes</SectionTitle>

      <CardGrid>
        {!loading && !error && residentes.map(res => (
          <Link
            to={`/personagensDetails/${res.id}`}
            key={res.id}
            style={{ textDecoration: 'none' }}
          >
            <Card>
              <CharacterImage src={res.image} alt={res.name} />
              <Header>
                <h2>{res.name}</h2>
                <span>{res.species}</span>
                <strong>Status: {res.status}</strong>
              </Header>
              <Footer>
                <strong>Última localização:</strong>
                <span>{res.location.name}</span>
              </Footer>
            </Card>
          </Link>
        ))}
      </CardGrid>
    </Container>
  )
}
