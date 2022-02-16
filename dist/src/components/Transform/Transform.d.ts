import { vec2, mat4 } from 'gl-matrix';
import { Entity } from "../../core/Entity/Entity";
import { Component } from "../Component/Component";
/**
 * Class for transform component.
 */
export declare class Transform extends Component {
    position: vec2;
    scale: vec2;
    rotation: number;
    matrix: mat4;
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
    constructor({ position, scale, rotation }: {
        position: {
            x: number;
            y: number;
        };
        scale: {
            x: number;
            y: number;
        };
        rotation: number;
    });
}
