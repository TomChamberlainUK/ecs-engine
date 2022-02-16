/**
 * Gets the fixed time step.
 * @returns The fixed time step in seconds.
 */
export declare function getFixedTimeStep(): number;
/**
 * Gets the variable time step.
 * @returns The variable time step in seconds.
 */
export declare function getVariableTimeStep(): number;
/**
 * Gets the time accumulated since the last animation frame.
 * @returns The accumulated time in seconds.
 */
export declare function getAccumulatedTime(): number;
/**
 * Updates the variable time step and time accumulator for interpolation between fixed time steps.
 * @param timestamp The current time.
 */
export declare function updateTime(timestamp: DOMHighResTimeStamp): void;
/**
 * Checks whether or not physics should be updated.
 * This is based on whether or not the time since the last update exceeds a pre set fixed time step.
 * @returns Whether or not systems based off of a fixed time step should be updated or not.
 */
export declare function shouldUpdatePhysics(): boolean;
