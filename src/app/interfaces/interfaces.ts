export interface Info{
    dato : string, 
    titulo : string, 
    descripcion? : string,
    logos_info? : Array<Logos_info>
    
}

export interface Logos_info{
    i? : string,
    svg? : string,
    title_svg : string
    descripcion? : string
}
