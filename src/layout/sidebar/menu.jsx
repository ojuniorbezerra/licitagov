import {Home,Anchor,Headphones} from 'react-feather'
export const MENUITEMS = [
    {
        title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
        ]
    },
    {
        title: 'Starter kit', icon: Anchor , type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/starter-kits/sample-page`, title: 'Sample Page', type: 'link' },
        ]
    },
    {
        title: 'Raise Support', icon: Headphones, type: 'sub',active: false, children: [
                { title: 'Raise Ticket', type: 'exteral_link', path: 'http://support.pixelstrap.com/help-center' },
        ]
        
    },
    
            
]