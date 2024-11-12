import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
  } = useSWR(`./api/random-character`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const { firstName, lastName, twitterName, geohash } = character;

  console.log("character", character);
  return (
    <>
      <h1>Character</h1>
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Twitter Name: {twitterName}</h2>
      <h2>Geohash: #{geohash}</h2>
    </>
  );
}
