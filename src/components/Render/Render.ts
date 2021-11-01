import { Component } from 'components/Component/Component';

/**
 * Class for render component.
 */
export class Render extends Component {
  radius: number;
  color: string;

  /**
   * Creates a new render component.
   * @param props Properties passed to the component.
   * @param props.radius The radius of the rendered circle.
   * @param props.color The color of the rendered circle.
   */
  constructor({
    radius = 16,
    color = 'white'
  } : {
    radius: number,
    color: string
  }) {
    super({ name: 'render' });
    this.radius = radius;
    this.color = color;
  }
}