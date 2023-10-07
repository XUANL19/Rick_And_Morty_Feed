import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Character, CharacterCardProps } from "../types";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "50%", objectFit: "cover", borderRadius: "10px" }}
        image={character.image}
        alt={character.name}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6">{character.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
