const create = (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rsz7tbWAeg4M3AH7kHvF/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-Type': 'application/json ; charset=UTF-8',
      },
    }).then((response) => response.json()).then((newData) => newData.result);
};
export default create;