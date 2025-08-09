import { CircleArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'


import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../api/server'
import type { Character } from '../mock/character'
import { BackButton, Card, CardGrid, CharacterCard, CharacterImage, Container, Footer, Header, SectionTitle, Title } from './style-episodes-detaisl'

interface Episode {
  id: number
  name: string
  episode: string
  air_date: string
  characters: string[] 
}

export function EpisodeDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [episode, setEpisode] = useState<Episode | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchEpisodeDetails() {
      setLoading(true)
      setError(null)

      try {
        const episodeResponse = await api.get(`/episode/${id}`)
        const episodeData: Episode = episodeResponse.data
        setEpisode(episodeData)

        const characterIds = episodeData.characters
          .map(url => url.split('/').pop())
          .filter(Boolean)

        if (characterIds.length > 0) {
          const idsString = characterIds.join(',')
          const charactersResponse = await api.get(`/character/${idsString}`)
          const chars = Array.isArray(charactersResponse.data)
            ? charactersResponse.data
            : [charactersResponse.data]
          setCharacters(chars)
        } else {
          setCharacters([])
        }
      } catch {
        setError('Erro ao carregar detalhes do episódio')
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodeDetails()
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  if (!episode) return null

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <CircleArrowLeft size={25} />
      </BackButton>

      <Title>Detalhes do Episódio</Title>

      <CharacterCard>
        <Title>{episode.name}</Title>
        <p style={{ textAlign: 'center' }}>
          <strong>Temporada:</strong> <span>{episode.episode}</span><br />
          <strong>Data de Exibição:</strong> <span>{episode.air_date}</span>
        </p>
      </CharacterCard>

      <SectionTitle>Personagens</SectionTitle>

      <CardGrid>
        {characters.map(character => (
          <Link
            to={`/personagensDetails/${character.id}`}
            key={character.id}
            style={{ textDecoration: 'none' }}
          >
            <Card>
              <CharacterImage src={character.image} alt={character.name} />
              <Header>
                <h2>{character.name}</h2>
                <span>{character.species}</span>
                <strong>Status: {character.status}</strong>
              </Header>
              <Footer>
                <strong>Última localização:</strong>
                <span>{character.location.name}</span>
              </Footer>
            </Card>
          </Link>
        ))}
      </CardGrid>
    </Container>
  )
}
