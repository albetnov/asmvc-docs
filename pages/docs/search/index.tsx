import { SearchResult, getServerSideProps } from "../../../Models/Search/SearchModel";

export default function Search({ items }: SearchResult) {
  return <p>Search Item!</p>;
}

export { getServerSideProps };
