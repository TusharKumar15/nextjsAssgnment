
// Libraries
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Utils
import { followCharacter } from '@/mutations/follow';
import { getCharacterById } from '@/queries/characterById';

//Components
import { Character } from '@/components/characters/Character';

const CharacterPage = () => {
  const router = useRouter();
  const [character, setCharacter] = useState();
  const { id } = router.query;

  const onFollow = async () => {
    try {
      await followCharacter({ id });
    } catch (error) {
      console.error('Failed to follow character:', error);
    }
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacterById({ id });
        setCharacter(data.character);
      } catch (error) {
        console.error('Failed to fetch character:', error);
      }
    }
    fetchCharacter();
  }, [id, setCharacter]);

  return (
    <div>
      {character && <Character character={character} onFollow={onFollow} />}
    </div>
  );
}

export default CharacterPage;