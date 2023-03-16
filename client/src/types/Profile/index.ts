export interface ProfileType {
    id:number
    first_name:string
    last_name:string
    phone:string
    email:string
    address:string
    city:string
    state:string
    zip:string 
    photo:string
    notes:string
}
export interface ProfileListType {
    profiles:ProfileType[]
}
