import getData from './get.js';

const display = async () => {
  const Content = document.getElementById('content');
  Content.innerHTML = '';
  const AllScore = await getData();
  AllScore.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user}: ${score.score}`;
    Content.appendChild(li);
  });
};
export default display;