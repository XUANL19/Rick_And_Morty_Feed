// src/components/CharacterPagination.tsx

import React from 'react';
import { Pagination } from '@mui/material';
import { CharacterPaginationProps } from '../types'; 

const CharacterPagination: React.FC<CharacterPaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={onPageChange}
      showFirstButton
      showLastButton
      color="primary"
      sx={{ display: 'flex', justifyContent: 'center' }}
    />
  );
};

export default CharacterPagination;
