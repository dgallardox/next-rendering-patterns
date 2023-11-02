const Search = (context) => {
  
  const searchTerm = context.params.searchTerm;
  console.log(searchTerm);

  return (
    <>
      you searched for...{searchTerm}
    </>
  )
}

export default Search;