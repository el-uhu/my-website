import { dev } from '$app/environment'

export const title = 'eluhu.xyz'
export const description = 'Writing, Teaching, Visualisation & Beer'
export const url = dev ? 'http://localhost:5173/' : 'https://eluhu.xyz/'
export const navitems = [
    {title: "About", href: "/about", target: ""},
    {title: "Contact", href: "/contact", target: ""},
    {title: "RSS", href: "/rss.xml", target: "_blank"}
]