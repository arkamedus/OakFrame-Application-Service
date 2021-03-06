/// <reference path="GraphNodeHTMLElement.d.ts" />
import { GraphNodeHTMLElement } from "./GraphNodeHTMLElement";
import { Graph } from "../model/Graph";
export interface GraphNode {
    _inputs: GraphNode[];
    _outputs: GraphNode[];
    _name: string;
    _display: any;
    _graph: Graph;
    _element: GraphNodeHTMLElement | HTMLElement;
    _evaluate(input: any): any;
    _render(element: HTMLElement): any;
    _value: any;
    attachOutput(node: GraphNode): any;
}
