"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("")

  function handleSearch() {
    router.push(`/search/${search}`)
  }

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='search...'
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}