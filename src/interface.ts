import { ComponentType } from 'react';

export interface pokemon {
    id: number;
    name: string;
    sprites: {
        back_default: string
    }
}
export interface router {
    path: string;
    component: any
}