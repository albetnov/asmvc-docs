import { GetServerSideProps } from "next";

interface ServerItemResult {
  file: string;
  text: string;
}

export interface SearchResult {
  items: ServerItemResult[];
}

export const getServerSideProps: GetServerSideProps<SearchResult> = async ({ query }) => {
  const host = process.env.host || "http://localhost:3000";

  const res = await fetch(host + `/api/search?query=${query.query}`);

  const items = await res.json();

  return {
    props: { items },
  };
};
