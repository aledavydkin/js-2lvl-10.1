import GameSavingLoader from './components/GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});
