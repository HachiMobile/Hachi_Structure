import React from "react";

export class MScreenModel {
    name: string = '';
    component: React.FC | null = null;
    children: React.FC[] = [];
}
