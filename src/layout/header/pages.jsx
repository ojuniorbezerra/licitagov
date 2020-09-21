import { Film, Image,File } from "react-feather"

export const errorPages = [
    
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Error 400', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Error 401', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Error 403', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Error 404', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Error 500', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Error 503', type: 'link' }
]
export const authPages = [
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Login Simple' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Login with Bg Img' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Login With Bg Video' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Register Simple' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Register With Bg Image' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Register With Bg Video' },
        
]
export const usefullPages = [
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Unlock User' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Forget Password' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Reset Password' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', title: 'Maintenance' }
]

export const comingsoonPages = [
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Coming Simple',icon:File, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Coming With Bg Img',icon:Film, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Coming With Bg Video',icon:Image, type: 'link' },
]