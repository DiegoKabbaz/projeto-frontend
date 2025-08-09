import { Routes, Route } from 'react-router-dom'
import { Episodes } from '../pages/episodes'
import { ListaLocalizacoes } from '../pages/location'
import { DetalheLocalizacao } from '../pages/locationDetails'
import { EpisodeDetails } from '../pages/episodesDetails'
import { Character } from '../pages/character'
import { CharacterDetails } from '../pages/characterDetails'


export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Character />} />
      <Route path="/personagensDetails/:id" element={<CharacterDetails />} />
      <Route path="/epsodes" element={<Episodes title='Episódios' />} />
      <Route path="/episodesDetails/:id" element={<EpisodeDetails />} />
      <Route path="/localizacao" element={<ListaLocalizacoes />} />
  <Route path="/detalhes/:id" element={<DetalheLocalizacao />} />

    </Routes>
  )
}
