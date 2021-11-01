/**
 * Base class for all components.
 */
export class Component {
  name: string;
  [key: string]: any;

  /**
   * Creates a new component.
   * @param props Properties passed to the component.
   * @param props.name The name of the component.
   */
  constructor({
    name = null
  } : {
    name: string
  }) {
    if (name === null) throw new Error('Components require a name');
    this.name = name;
  }
}













// export interface Component {
//   name: string;
//   [props: string]: any;
// }


// /**
//  * Base class for all components.
//  */
// export class Component {
//   // name: string;
//   // [otherProps: string]: any;

//   /**
//    * Define a component.
//    * 
//    * @param props - Argument passed from the parent through the ```super``` keyword
//    * @property props.
//    */
//   constructor(name: string = null) {
//   // constructor({ name = null } : { name: string }) {
//     if (name === null) throw new Error('Components require a name');
//     this.name = name;
//   }
// }