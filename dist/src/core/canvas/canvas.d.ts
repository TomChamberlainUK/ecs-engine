/**
 * Gets the canvas.
 */
export declare function getCanvas(): HTMLCanvasElement;
/**
 * Gets the canvas rendering context.
 */
export declare function getContext(): RenderingContext;
/**
 * Sets the canvas.
 * @param newCanvas The canvas DOM element, or a querySelector that points to the canvas DOM element.
 * @returns A boolean representing whether or not the function was successful.
 */
export declare function setCanvas(newCanvas: HTMLCanvasElement | string, contextType: '2d' | 'webgl2'): HTMLCanvasElement;
