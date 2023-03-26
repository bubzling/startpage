export interface State  {
    AppData: [LinkGroup]
}

export interface LinkGroup {
    name: string, 
    links: [Link]
}

export interface Link {
    name: string,
    url: string
}