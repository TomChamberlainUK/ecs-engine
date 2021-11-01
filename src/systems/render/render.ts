import { getCanvas, getContext } from 'core/canvas/canvas';
import { Entity } from 'core/Entity/Entity';

/** 
 * Renders entities on to the canvas rendering context.
 * @param entities An array of entities.
 * 
 * @requires {@link Transform}, {@link Render}.
 */
export function render(entities: Entity[]): void {

  const canvas = getCanvas();
  const ctx = getContext();

  // Check that canvas is using the correct rendering context
  if (!(ctx instanceof CanvasRenderingContext2D)) {
    console.error(new Error('ECS-Engine render system error. The provided rendering context is not an instance of CanvasRenderingContext2D.'))
    return;
  }

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Save transformation context to restore back to default
  ctx.save();

  // // Set origin to canvas center
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // Zoom out to see everything
  ctx.scale(1, 1);

  // Loop through relevant entities
  for (const entity of entities) {
    if (!entity.hasComponents('transform', 'render')) continue;

    const transform = entity.getComponent('transform');
    const render = entity.getComponent('render');

    // Start drawing on canvas context
    ctx.save();
    ctx.transform(
      transform.matrix.data[0],
      transform.matrix.data[1],
      transform.matrix.data[2],
      transform.matrix.data[3],
      transform.matrix.data[4],
      transform.matrix.data[5],
    );
    ctx.beginPath();

    // Draw a circle on the canvas context
    ctx.arc(
      0,
      0,
      render.radius,
      0,
      Math.PI * 2
    );

    // Finish drawing on canvas context
    ctx.closePath();

    // Render colors
    ctx.fillStyle = render.color;
    ctx.fill();

    // Restore canvas to before entity transformations
    ctx.restore();

  }

  // Restore canvas to default state
  ctx.restore();

}