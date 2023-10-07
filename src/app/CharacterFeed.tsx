import React from "react";
import { Grid } from "@mui/material";
import { getCharacters } from "./api";
import { Character, ApiResponse } from "../types";
import CharacterCard from "../components/CharacterCard";
import CharacterPagination from "../components/CharacterPagination";

const CharacterFeed: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const fetchData = async (page: number) => {
    try {
      const data = (await getCharacters(page)) as ApiResponse;
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
    }
  };

  React.useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ width: "90%", margin: "0 auto", padding: "0rem" }}
      >
        {characters.map((character) => (
          <Grid item xs={12} sm={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      <CharacterPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePaginationChange}
      />
    </div>
  );
};

export default CharacterFeed;
