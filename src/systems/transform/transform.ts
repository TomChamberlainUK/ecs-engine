import { IDMatrix2D } from 'math/Matrix2D/Matrix2D';
import { Entity } from 'core/Entity/Entity';

/** 
 * Generates entity matrices based on their local and world {@link Transform}.
 * @param entities An array of entities.
 * 
 * @requires {@link Transform}.
 */
export function transform(_entities: Entity[]) {

  // Filter valid root nodes
  const entities = _entities.filter(entity => {
    if (!entity.hasComponent('transform')) return;
    return entity.getComponent('transform').parent === null;
  })

  for (const entity of entities) {
    recursivelyConfigureTransform(entity);
  }

}

function recursivelyConfigureTransform(entity: Entity) {
  const transform = entity.getComponent('transform');

  let tfMatrix = new IDMatrix2D().scale(transform.scale.x, transform.scale.y)
                                  .rotate(transform.rotation)
                                  .translate(transform.position.x, transform.position.y);

  if (transform.parent !== null) {
    const parentTransform = transform.parent.getComponent('transform');
    tfMatrix = tfMatrix.multiplyMatrix(parentTransform.matrix);
  }

  transform.matrix = tfMatrix;

  if (transform.child !== null) {
    recursivelyConfigureTransform(transform.child);
  }
  if (transform.nextSibling !== null) {
    recursivelyConfigureTransform(transform.nextSibling);
  }

}