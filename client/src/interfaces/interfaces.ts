interface Menu {
    id: number;
    menu: string;
    isBooked: boolean;

}

interface IRoute {
    path: string,
    name: string,
    component: any, 
    exact: boolean,
    props?: any,
}

export type {
    Menu,
    IRoute
}