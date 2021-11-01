import { getScene } from 'core/scene/scene';
import { updateTime, shouldUpdatePhysics } from 'core/time/time';

/**
 * Starts the game loop.
 */
export function startGame(): void {
  gameLoop();
}

/**
 * The game loop. Recursively updates the scene.
 */
function gameLoop() {

  const scene = getScene();

  function step(timestamp: DOMHighResTimeStamp) {

    updateTime(timestamp);

    while (shouldUpdatePhysics()) {
      scene.update();
    }

    scene.render();

    requestAnimationFrame(step);

  }

  requestAnimationFrame(step);
}