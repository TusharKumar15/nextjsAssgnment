// Library
import { useEffect, useState } from "react";

// Utils
import { getFollowedCharacters } from "@/queries/followedCharacters";

// Components
import CharacterList from "@/components/characters/CharacterList"
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";

const FollowedCharacters = () => {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    const fetchedCharacters = async () => {
      const data = await getFollowedCharacters();
      setCharacters(data);
    }
    fetchedCharacters();
  }, [setCharacters]);
  return (
    <div>
      {characters ? <CharacterList characters={characters} /> : <EmptyPlaceholder/>}
    </div>
  )
}

export default FollowedCharacters