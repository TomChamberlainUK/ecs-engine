import { Vector2 } from 'math/Vector2/Vector2';
import { Component } from 'components/Component/Component';

/**
 * Class for kinematic component.
 */
export class Kinematic extends Component {
  positionDelta: Vector2;
  rotationDelta: number;

  /**
   * Creates a new kinematic component.
   * @param props Properties passed to the component.
   * @param props.positionDelta Specifies an amount to move per timestep.
   * @param props.positionDelta.x Specifies an amount to move along the x axis per timestep.
   * @param props.positionDelta.y Specifies an amount to move along the y axis per timestep.
   * @param props.rotationDelta Specifies an amount to rotate per timestep.
   */
  constructor({
    positionDelta = { x: 0, y: 0 },
    rotationDelta = 0
  } : {
    positionDelta: { x: number, y: number },
    rotationDelta: number
  }) {
    super({ name: 'kinematic' });
    this.positionDelta = new Vector2(positionDelta);
    this.rotationDelta = rotationDelta;
  }
}