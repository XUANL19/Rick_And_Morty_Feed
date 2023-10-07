export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface ApiResponse {
  results: Character[];
  info: {
    pages: number;
  };
}

export interface CharacterCardProps {
  character: Character;
}

export interface CharacterPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
