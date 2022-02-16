/**
 * A Entity Component System based engine framework for building games.
 *
 * @packageDocumentation
 */
declare module 'gl-matrix' {
    module glMatrix {
        function setMatrixArrayType(type: ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor): void;
    }
}
export { Entity } from "./core/Entity/Entity";
import * as components from "./components/index";
export { components };
import * as systems from "./systems/index";
export { systems };
export { startGame } from "./core/gameLoop/gameLoop";
export { getCanvas, setCanvas, getContext } from "./core/canvas/canvas";
export { Scene, getScene, setScene, clearScene } from "./core/scene/scene";
export { getFixedTimeStep, getVariableTimeStep, getAccumulatedTime } from "./core/time/time";
import * as geometry from './Geometry';
export { geometry };
