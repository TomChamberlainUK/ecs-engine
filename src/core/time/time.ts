let fixedTimeStep = 1 / 60;
let variableTimeStep = 0;
let lastTimestamp = window.performance.now();
let timeAccumulator = 0;
const maxAccumulator = Math.max(0.25, fixedTimeStep);


/**
 * Gets the fixed time step.
 * @returns The fixed time step in seconds.
 */
export function getFixedTimeStep(): number {
  return fixedTimeStep;
}

/** 
 * Gets the variable time step.
 * @returns The variable time step in seconds.
 */
export function getVariableTimeStep(): number {
  return variableTimeStep;
}

/**
 * Gets the time accumulated since the last animation frame.
 * @returns The accumulated time in seconds.
 */
export function getAccumulatedTime(): number {
  return timeAccumulator;
}

/** 
 * Updates the variable time step and time accumulator for interpolation between fixed time steps.
 * @param timestamp The current time.
 */
export function updateTime(timestamp: DOMHighResTimeStamp) {

  // Calulate time passed since last time this function was called
  const deltaTime = (timestamp - lastTimestamp) / 1000;

  // Update the variable time step and add it to the time accumulator
  variableTimeStep = deltaTime;
  timeAccumulator += deltaTime;

  // Cap the time accumulator, prevents spiral of death when trying to catch to catch up on physics updates
  if (timeAccumulator > maxAccumulator) timeAccumulator = maxAccumulator;

  // Keep track of the timestamp to calculate the next deltaTime
  lastTimestamp = timestamp;

}

/** 
 * Checks whether or not physics should be updated.
 * This is based on whether or not the time since the last update exceeds a pre set fixed time step.
 * @returns Whether or not systems based off of a fixed time step should be updated or not.
 */
export function shouldUpdatePhysics(): boolean {

  // If the time accumulated is greater than a fixed time step:
  // Reduce the accumulated time by the fixed time step and return true
  if (timeAccumulator >= fixedTimeStep) {
    timeAccumulator -= fixedTimeStep;
    return true;
  }

  // If not, return false
  else {
    return false;
  }
  
}