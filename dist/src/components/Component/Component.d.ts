/**
 * Base class for all components.
 */
export declare class Component {
    name: string;
    [key: string]: any;
    /**
     * Creates a new component.
     * @param props Properties passed to the component.
     * @param props.name The name of the component.
     */
    constructor({ name }: {
        name: string;
    });
}
