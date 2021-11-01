import { Entity } from 'core/Entity/Entity';
import { getFixedTimeStep } from 'core/time/time';

const deltaTime = getFixedTimeStep();

/** 
 * Directly applies changes to entities transform over time.
 * @param entities An array of entities.
 * 
 * @requires {@link Transform}, {@link Kinematic}.
 */
export function kinematic(entities: Entity[]): void {

  // Loop through valid kinetic entities
  entities.forEach(entity => {
    if (!entity.hasComponents('transform', 'kinematic')) return;

    // Get relevant components
    const transform = entity.getComponent('transform');
    const kinematic = entity.getComponent('kinematic');

    // Update transform over time
    transform.position = transform.position.add(kinematic.positionDelta.multiplyBy(deltaTime));
    transform.rotation += kinematic.rotationDelta * deltaTime;

  });

}