export interface ProfileType {
    first_name:string & { __charLimit: 255 }
    last_name:string & { __charLimit: 255 }
    phone:string & { __charLimit: 255 }
    email:string & { __charLimit: 255 }
    address:string
    city:string
    state:string
    zip: string & { __charLimit: 255 }
    photo: string & { __charLimit: 255 }
    notes:string & {__charlimit:255}
}

export interface ProfileListType {
    profiles:ProfileType[]
}
