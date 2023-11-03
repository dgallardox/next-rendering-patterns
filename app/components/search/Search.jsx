"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./search.module.css";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch() {
    router.push(`/search/${search}`);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <input
        id={styles.searchbar}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        type='text'
        placeholder='search...'
      />
    </>
  );
};

export default Search;
