const getData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rsz7tbWAeg4M3AH7kHvF/scores/');
  const response = await data.json();
  return response.result;
};
export default getData;