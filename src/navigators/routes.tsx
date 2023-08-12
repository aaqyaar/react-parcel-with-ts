import { FC } from "react";
import { paths } from "./paths";
import { Hello, Hello2 } from "../components";

export interface IRoute {
    label: string
    route: string
    component: FC
    isPublic: boolean
    layout?: FC
    // array of components
    children?: IRoute[]
    exact: boolean
}

//! note if you need private routes use the down array

/**  Public Routes 
@param type {label: string} - The Component name
@param type {route: string} - The Component Path href
@param type {component: Component} - The Component to render
@param type {isPublic:boolean} - Boolean flag that figures out if the route is public or private
@param type {layout:JSX FC} - The Layout to wrap the component with
@param type {exact:boolean} - The Exact path to match
*/
export const routes: IRoute[] = [
    {
        label: "Hello",
        route: paths.root,
        component: Hello,
        isPublic: true,
        exact: true
    },
    {
        label: "Hello2",
        route: paths.hello,
        component: Hello2,
        isPublic: true,
        exact: true
    }
    // ... other route definitions
]
