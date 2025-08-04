import React, { useEffect, useState } from "react";
import CharacterView from "./CharacterView/CharacterView";
import { useParams } from "react-router";

const Character = () => {
  const { charId } = useParams();

  const [charData, setCharData] = useState(null);
  const [isLoading, setIsLoading] =useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `http://localhost:8080/api/player-characters/${charId}`
      );
      const data = await response.json();
      setCharData(data.data.character);
      setIsLoading(false);
    };
    fetchCharacter();
  }, [charId]);

  useEffect(()=>{
     console.log({charData})
  },[charData])

  return <>{isLoading ? <>Loading...</> : <CharacterView  character={{...charData}}/>}</>;
};

export default Character;
