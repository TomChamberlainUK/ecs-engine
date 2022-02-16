import { Entity } from "../Entity/Entity";
/**
 * Sets the current scene.
 * @param scene The scene to be set.
 * @returns The newly set current scene.
 */
export declare function setScene(scene: Scene): Scene;
/**
 * Clears the current scene.
 */
export declare function clearScene(): void;
/**
 * Gets the current scene.
 * @returns The current scene.
 */
export declare function getScene(): Scene;
/**
 * Class representing a scene.
 */
export declare class Scene {
    entities: Entity[];
    updateSystems: Array<Function>;
    renderSystems: Array<Function>;
    /**
     * Creates a new scene.
     */
    constructor();
    /**
     * Adds a new entity into the scene.
     * @param entity The entity to be added.
     * @returns The entity added.
     */
    addEntity(entity: Entity): Entity;
    /**
     * Sets the systems to be used when updating the scene.
     * These will be processed in the order that they are set.
     * @param updateSystems An ordered array of systems to be used on the entities.
     */
    setUpdateSystems(systems: Array<Function>): void;
    /**
     * Sets the systems to be used when rendering the scene.
     * These will be processed in the order that they are set.
     * @param renderSystems An ordered array of systems to be used on the entities.
     */
    setRenderSystems(systems: Array<Function>): void;
    /**
     * Executes all set update systems on all entities.
     * Each system will process all entities before moving on to the next system in order.
     */
    update(): void;
    /**
     * Executes all set render systems on all entities.
     * Each system will process all entities before moving on to the next system in order.
     */
    render(): void;
}
