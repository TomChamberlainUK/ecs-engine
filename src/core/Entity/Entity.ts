import { Component } from 'components/Component/Component';

type variableRecord = Record<string, any>;

/**
 * Class for Entity.
 */
export class Entity {
  id: number;
  components: Record<string, Component>;

  /**
   * Creates a new Entity.
   */
  constructor() {
    this.id = getNewId();
    this.components = {}
  }

  /**
   * Adds a new component to this entity.
   * @param ComponentClass The component to add's class.
   * @param componentProps Properties passed to the component.
   * @todo Add proper type checking to ComponentClass parameter. Currently allows any type, needs to check if class is child of Component class.
   * @returns This entity.
   */
  addComponent(
    ComponentClass: typeof Component | any, // Need to implement parentClass has typeof Component somehow
    componentProps: variableRecord = {}
  ): Entity {
    const component = new ComponentClass(componentProps);
    this.components[component.name] = component;
    return this;
  }

  /**
   * Removes a component from this entity.
   * @param componentName The name of the component to be removed.
   */
  removeComponent(componentName: string): Entity {
    delete this.components[componentName];
    return this;
  }

  /**
   * Checks whether this entity contains a specific component.
   * @param componentName The name of the component.
   */
  hasComponent(componentName: string): boolean {
    return this.components[componentName] ? true : false;
  }

  /**
   * Checks whether this entity contains multiple specific components.
   * @param componentNames The names of the components.
   */
  hasComponents(...componentNames: Array<string>): boolean {
    return componentNames.every(componentName => this.hasComponent(componentName));
  }

  /**
   * Retrieve a specific component from this entity.
   * @param componentName The name of the component.
   */
  getComponent(componentName: string): Component {
    return this.components[componentName];
  }
}


// Unique ID generator
let currentNewId = 0;
function getNewId() {
  const id = currentNewId;
  currentNewId++;
  return id;
}