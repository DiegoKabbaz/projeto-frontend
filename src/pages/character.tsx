
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../components/pagination'
import type { Character, CharactersResponse } from '../mock/character'
import api from '../api/server'
import { Card, CardGrid, CharacterImage, Footer, Header, Title } from './style-character'


export function Character() {
  const [personagens, setPersonagens] = useState<Character[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    async function fetchPersonagens() {
      try {
        const response = await api.get<CharactersResponse>(`/character?page=${currentPage}`)

        setPersonagens(response.data.results)
        setTotalPages(response.data.info.pages)
      } catch (error) {
        console.error('Erro ao buscar personagens:', error)
      }
    }

    fetchPersonagens()
  }, [currentPage])

  return (
    <>
      <Title>Personagens</Title>

      <CardGrid>
        {personagens.map((personagem) => (
          <Link
            to={`/personagensDetails/${personagem.id}`}
            key={personagem.id}
            style={{ textDecoration: 'none' }}
          >
            <Card>
              <CharacterImage src={personagem.image} alt={personagem.name} />
              <Header>
                <h2>{personagem.name}</h2>
                <span>{personagem.species}</span>
                <strong>Status: {personagem.status}</strong>
              </Header>
              <Footer>
                <strong>Última localização:</strong>
                <span>{personagem.location.name}</span>
              </Footer>
            </Card>
          </Link>
        ))}
      </CardGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}
