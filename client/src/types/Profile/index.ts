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

export interface NewProfileType  {
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

export interface SyntheticEvent<T> {
    currentTarget: EventTarget & T;
}

export interface ProfileListType {
    profiles:ProfileType[]
}

export interface FieldDataType {
    label:string
    value : string
    maxLength:number
    required:boolean
    handleStateChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
