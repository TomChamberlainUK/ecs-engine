let canvas: HTMLCanvasElement = null;
let context: RenderingContext = null;

/**
 * Gets the canvas.
 */
export function getCanvas(): HTMLCanvasElement {
  return canvas;
}

/**
 * Gets the canvas rendering context.
 */
export function getContext(): RenderingContext {
  return context;
}

/** 
 * Sets the canvas.
 * @param newCanvas The canvas DOM element, or a querySelector that points to the canvas DOM element.
 * @returns A boolean representing whether or not the function was successful.
 */
export function setCanvas(
  newCanvas: HTMLCanvasElement | string,
  contextType: '2d' | 'webgl2'
): HTMLCanvasElement {
  // If canvas is passed as a querySelector string, attempt to find it in the DOM
  if (typeof newCanvas === 'string') {
    canvas = document.querySelector(newCanvas);
    // Check that the provided querySelector string points to an HTMLCanvasElement
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error(new Error('ECS-Engine Game.setCanvas error. The provided canvas querySelector string does not point to an HTMLCanvasElement.'));
      return null;
    } 
  }
  // If canvas is passed as an HTMLCanvasElement, set it as expected
  else if (newCanvas instanceof HTMLCanvasElement) {
    canvas = newCanvas;
  }
  // If canvas is passed as anything else, throw an error and return false
  else {
    console.error(new Error('ECS-Engine Game.setCanvas error. canvas argument not recognised. This must be formatted as either an HTMLCanvasElement or a querySelector string.'));
    return null;
  }

  // If the canvas is set successfully, set its width and height and create a rendering context
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  context = canvas.getContext(contextType);

  // Add an event listener to update width and height on viewport resize
  window.addEventListener('resize', () => {
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
  });

  // Finally return canvas
  return canvas;
}













// let canvas: HTMLCanvasElement = null;
// let ctx: CanvasRenderingContext2D = null;

// /**
//  * Gets the canvas.
//  */
// export function getCanvas(): HTMLCanvasElement {
//   return canvas;
// }

// /**
//  * Gets the canvas rendering context.
//  */
// export function getCtx(): CanvasRenderingContext2D {
//   return ctx;
// }

// /** 
//  * Sets the canvas.
//  * @param newCanvas The canvas DOM element, or a querySelector that points to the canvas DOM element.
//  * @returns A boolean representing whether or not the function was successful.
//  */
// export function setCanvas(newCanvas: HTMLCanvasElement | string): HTMLCanvasElement {
//   // If canvas is passed as a querySelector string, attempt to find it in the DOM
//   if (typeof newCanvas === 'string') {
//     canvas = document.querySelector(newCanvas);
//     // Check that the provided querySelector string points to an HTMLCanvasElement
//     if (!(canvas instanceof HTMLCanvasElement)) {
//       console.error(new Error('ECS-Engine Game.setCanvas error. The provided canvas querySelector string does not point to an HTMLCanvasElement.'));
//       return null;
//     } 
//   }
//   // If canvas is passed as an HTMLCanvasElement, set it as expected
//   else if (newCanvas instanceof HTMLCanvasElement) {
//     canvas = newCanvas;
//   }
//   // If canvas is passed as anything else, throw an error and return false
//   else {
//     console.error(new Error('ECS-Engine Game.setCanvas error. canvas argument not recognised. This must be formatted as either an HTMLCanvasElement or a querySelector string.'));
//     return null;
//   }

//   // If the canvas is set successfully, set its width and height and create a rendering context
//   canvas.width = canvas.scrollWidth;
//   canvas.height = canvas.scrollHeight;
//   ctx = canvas.getContext('2d');

//   // Add an event listener to update width and height on viewport resize
//   window.addEventListener('resize', () => {
//     canvas.width = canvas.scrollWidth;
//     canvas.height = canvas.scrollHeight;
//   });

//   // Finally return canvas
//   return canvas;
// }