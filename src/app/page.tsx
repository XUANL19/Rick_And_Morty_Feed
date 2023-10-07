"use client";
import React from "react";
import Title from '../components/Title';
import CharacterFeed from "./CharacterFeed";

const Page: React.FC = () => {
  return (
    <div style={{ margin: "1rem 0 2rem 0" }}>
      <Title />
      <CharacterFeed />
    </div>
  );
};

export default Page;
