import { Component } from "../Component/Component";
export declare class ProjectionComponent extends Component {
    constructor({ viewport, zoom, }: {
        viewport?: {
            width: number;
            height: number;
        };
        zoom?: number;
    });
}
