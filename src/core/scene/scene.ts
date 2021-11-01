import { Entity } from 'core/Entity/Entity';

let currentScene: Scene = null;

/**
 * Sets the current scene.
 * @param scene The scene to be set.
 * @returns The newly set current scene.
 */
export function setScene(scene: Scene): Scene {
  currentScene = scene;
  return currentScene;
}

/**
 * Clears the current scene.
 */
export function clearScene(): void {
  currentScene = null;
}

/**
 * Gets the current scene.
 * @returns The current scene.
 */
export function getScene(): Scene {
  return currentScene;
}

/**
 * Class representing a scene.
 */
export class Scene {
  entities: Entity[];
  updateSystems: Array<Function>;
  renderSystems: Array<Function>;

  /**
   * Creates a new scene.
   */
  constructor() {
    this.entities = [];
    this.updateSystems = [];
    this.renderSystems = [];
  }

  /**
   * Adds a new entity into the scene.
   * @param entity The entity to be added.
   * @returns The entity added.
   */
  addEntity(entity: Entity): Entity {
    this.entities.push(entity);
    return entity;
  }

  /**
   * Sets the systems to be used when updating the scene.
   * These will be processed in the order that they are set.
   * @param updateSystems An ordered array of systems to be used on the entities.
   */
  setUpdateSystems(systems: Array<Function>) {
    this.updateSystems = systems;
  }

  /**
   * Sets the systems to be used when rendering the scene.
   * These will be processed in the order that they are set.
   * @param renderSystems An ordered array of systems to be used on the entities.
   */
  setRenderSystems(systems: Array<Function>) {
    this.renderSystems = systems;
  }

  /**
   * Executes all set update systems on all entities.
   * Each system will process all entities before moving on to the next system in order.
   */
  update() {
    for (const system of this.updateSystems) {
      system(this.entities);
    }
  }

  /**
   * Executes all set render systems on all entities.
   * Each system will process all entities before moving on to the next system in order.
   */
  render() {
    for (const system of this.renderSystems) {
      system(this.entities);
    }
  }
}