import { Vector2 } from 'math/Vector2/Vector2';
import { Matrix2D, IDMatrix2D } from 'math/Matrix2D/Matrix2D';
import { Entity } from 'core/Entity/Entity';
import { Component } from 'components/Component/Component';

/**
 * Class for transform component.
 */
export class Transform extends Component {
  position: Vector2;
  scale: object;
  rotation: number;

  matrix: Matrix2D;
  parent: Entity;
  prevSibling: Entity;
  nextSibling: Entity;
  child: Entity;

  /**
   * Creates a new transform component.
   * @param props Properties passed to the component.
   * @param props.position The entity's position in relation to its parent
   * @param props.position.x The entity's x position in relation to its parent
   * @param props.position.y The entity's y position in relation to its parent
   * @param props.scale The entity's scale in relation to its parent
   * @param props.scale.x The entity's x scale in relation to its parent
   * @param props.scale.y The entity's y scale in relation to its parent
   * @param props.rotation The entity's rotation in relation to its parent
   */
  constructor({
    position = { x: 0, y: 0 },
    scale = { x: 1, y: 1 },
    rotation = 0
  } : {
    position: { x: number, y: number },
    scale: { x: number, y: number },
    rotation: number
  }) {
    super({ name: 'transform' });
    this.position = new Vector2(position);
    this.scale = scale;
    this.rotation = rotation;

    this.matrix = new IDMatrix2D;
    this.localMatrix = new IDMatrix2D;
    this.globalMatrix = new IDMatrix2D;

    this.parent = null;
    this.prevSibling = null;
    this.nextSibling = null;
    this.child = null;
  }
}