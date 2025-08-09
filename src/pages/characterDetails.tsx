import { CircleArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Character } from '../mock/character'
import api from '../api/server'
import { Episodes } from './episodes'
import { BackButton, CharacterCard, Container, Image, Info, SectionTitle, Title } from './style-chacarter-details'

export function CharacterDetails() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCharacter() {
      if (!id) return

      setLoading(true)
      setError(null)

      try {
        const response = await api.get<Character>(`/character/${id}`)
        setCharacter(response.data)
      } catch (err) {
        setError('Erro ao carregar personagem.')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  if (!character) return <p>Personagem não encontrado.</p>

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <CircleArrowLeft size={25} />
      </BackButton>

      <Title>Detalhes do Personagem {character.name}</Title>

      <CharacterCard>
        <Info>
          <h2 style={{ color: 'black' }}>{character.name}</h2>
          <span className="status">Status: {character.status}</span>
          <span><strong>Espécie:</strong> {character.species}</span>
          <span><strong>Origem:</strong> {character.origin.name}</span>
          <span><strong>Última localização:</strong> {character.location.name}</span>
        </Info>
        <Image src={character.image} alt={character.name} />
      </CharacterCard>

      <SectionTitle>
        {character.name} aparece nos seguintes episódios:
      </SectionTitle>

      <Episodes/>
    </Container>
  )
}
