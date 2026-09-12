export interface ITechType{
  id:string
  name:string
  category:string
  description:string
  icon:string
  rating:number
  difficulty:string
  badge:string
  color:string
}


export interface ITechnologiesProps{
  promise:Promise<ITechType[]>
}


export interface ITechProps{
  tech:ITechType
  handleStack:(tech:ITechType)=>void
  stack:ITechType[]
}


export interface IYourStackProps{
  tech:ITechType
  removeStack:(tech:ITechType)=>void
}