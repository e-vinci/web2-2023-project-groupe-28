import Phaser from 'phaser';
import GameScene from '../Game/GameScene';
import { clearPage, grow } from '../../utils/render';

let game;

const GamePage = () => {
  clearPage();
  const phaserGame = `
<div id="gameDiv" class="justify-self-center"">
</div>`;

  const main = document.querySelector('main');
  main.innerHTML = phaserGame;

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [GameScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: 'gameDiv',
  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if (game) game.destroy(true);
  game = new Phaser.Game(config);

  grow();
};

export default GamePage;
