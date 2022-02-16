import { Component } from "../../components/Component/Component";
declare type variableRecord = Record<string, any>;
/**
 * Class for Entity.
 */
export declare class Entity {
    id: number;
    components: Record<string, Component>;
    /**
     * Creates a new Entity.
     */
    constructor();
    /**
     * Adds a new component to this entity.
     * @param ComponentClass The component to add's class.
     * @param componentProps Properties passed to the component.
     * @todo Add proper type checking to ComponentClass parameter. Currently allows any type, needs to check if class is child of Component class.
     * @returns This entity.
     */
    addComponent(ComponentClass: typeof Component | any, // Need to implement parentClass has typeof Component somehow
    componentProps?: variableRecord): Entity;
    /**
     * Removes a component from this entity.
     * @param componentName The name of the component to be removed.
     */
    removeComponent(componentName: string): Entity;
    /**
     * Checks whether this entity contains a specific component.
     * @param componentName The name of the component.
     */
    hasComponent(componentName: string): boolean;
    /**
     * Checks whether this entity contains multiple specific components.
     * @param componentNames The names of the components.
     */
    hasComponents(...componentNames: Array<string>): boolean;
    /**
     * Retrieve a specific component from this entity.
     * @param componentName The name of the component.
     */
    getComponent(componentName: string): Component;
}
export {};
