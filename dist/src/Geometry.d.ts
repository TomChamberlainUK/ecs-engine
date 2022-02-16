import * as OBJFile from 'obj-file-parser';
import { vec2, vec3 } from 'gl-matrix';
export declare function fetchObj(url: string): Promise<OBJFile.ObjFile>;
export declare class StaticMeshTest {
    data: OBJFile.ObjModel;
    constructor(data?: any);
    static loadOBJ(objSrc: string): Promise<StaticMeshTest>;
}
export declare class Geometry {
    faces: Face[];
    vertexCount: number;
    positions: number[];
    normals: number[];
    uvs: number[];
    constructor(faces?: Face[]);
    getVertexCount(): number;
    getPositions(): number[];
    getNormals(): number[];
    getUVs(): number[];
    static parseOBJ(source: string): Geometry;
    static loadOBJ(url: string): Promise<unknown>;
}
export declare class Face {
    vertices: Vertex[];
    constructor(vertices: Vertex[]);
}
export declare class Vertex {
    position: vec3;
    normal: vec3;
    uv: vec2;
    constructor(position: vec3, normal: vec3, uv: vec2);
}
export declare class VBO {
    gl: WebGL2RenderingContext;
    size: number;
    count: number;
    data: WebGLBuffer;
    constructor(gl: WebGL2RenderingContext, data: number[], count: number);
    bindToAttribute(attribute: number): void;
    destroy(): void;
}
export declare function sendToGPU(// delete this
gl: WebGL2RenderingContext, uniform: WebGLUniformLocation, transpose: boolean, matrix: number[]): void;
export declare class Mesh {
    gl: WebGL2RenderingContext;
    positions: VBO;
    normals: VBO;
    uvs: VBO;
    vertexCount: number;
    texture: Texture;
    constructor(gl: WebGL2RenderingContext, geometry: Geometry, texture: Texture);
    static load(gl: WebGL2RenderingContext, modelURL: string, textureURL: string): Promise<Mesh>;
    destroy(): void;
}
export declare class Texture {
    gl: WebGL2RenderingContext;
    data: WebGLTexture;
    constructor(gl: WebGL2RenderingContext, image: TexImageSource);
    use(uniform: WebGLUniformLocation, binding: number): void;
    static load(gl: WebGL2RenderingContext, url: string): Promise<unknown>;
}
