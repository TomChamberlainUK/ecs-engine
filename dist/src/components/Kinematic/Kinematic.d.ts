import { vec2 } from 'gl-matrix';
import { Component } from "../Component/Component";
/**
 * Class for kinematic component.
 */
export declare class Kinematic extends Component {
    positionDelta: vec2;
    rotationDelta: number;
    /**
     * Creates a new kinematic component.
     * @param props Properties passed to the component.
     * @param props.positionDelta Specifies an amount to move per timestep.
     * @param props.positionDelta.x Specifies an amount to move along the x axis per timestep.
     * @param props.positionDelta.y Specifies an amount to move along the y axis per timestep.
     * @param props.rotationDelta Specifies an amount to rotate per timestep.
     */
    constructor({ positionDelta, rotationDelta }: {
        positionDelta: {
            x: number;
            y: number;
        };
        rotationDelta: number;
    });
}
