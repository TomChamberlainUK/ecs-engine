import { Component } from "../Component/Component";
/**
 * Class for render component.
 */
export declare class Render extends Component {
    radius: number;
    color: string;
    /**
     * Creates a new render component.
     * @param props Properties passed to the component.
     * @param props.radius The radius of the rendered circle.
     * @param props.color The color of the rendered circle.
     */
    constructor({ radius, color }: {
        radius: number;
        color: string;
    });
}
