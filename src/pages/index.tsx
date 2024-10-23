import CharacterList from "@/components/characters/CharacterList"
import { getCharacters } from "@/queries/characters"
import { useEffect, useState } from "react"

const Component = () => {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    const fetchedCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data.characters.results);
    }
    fetchedCharacters();
  }, [setCharacters]);
  return (
    <div>
      {characters && <CharacterList characters={characters} />}
    </div>
  )
}

export default Component