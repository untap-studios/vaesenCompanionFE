import React, { useEffect, useState } from "react";
import CharacterView from "./CharacterView";
import { useParams } from "react-router";
import { callApi } from "../../../utils/callApi";
import { CharacterSheet } from "../../../types/playerCharacter";

const Character = () => {
  const { charId } = useParams();

  const [charData, setCharData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await callApi(`player-characters/${charId}`, "GET");
      setCharData(data.data.character);
      setIsLoading(false);
    };
    fetchCharacter();
  }, [charId]);

  useEffect(() => {
    console.log({ charData });
  }, [charData]);

  return (
    <>
      {isLoading && !charData ? (
        <>Loading...</>
      ) : (
        <CharacterView character={{ charData } as unknown as CharacterSheet} />
      )}
    </>
  );
};

export default Character;
