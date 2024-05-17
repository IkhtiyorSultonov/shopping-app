import { HiOutlineShoppingBag } from "react-icons/hi"
import { IoLogoInstagram, IoSearchSharp } from "react-icons/io5"
import { MdOutlineAccountCircle } from "react-icons/md"
import { PiYoutubeLogo } from "react-icons/pi"
import { SlSocialFacebook } from "react-icons/sl"

export const navigation=[
    {
        label:'Home',
        route:'/'
    },
    {
        label:'Shop',
        route:'/shop'
    },
    {
        label:'Product',
        route:'/product'
    },
    {
        label:'Contact Us',
        route:'/contact'
    },
]
export const navigationIco=[
    {
        icon:IoSearchSharp,
        route:'/'
    },
    {
        icon:MdOutlineAccountCircle,
        route:'/profile'
    },
    {
        icon:HiOutlineShoppingBag,
        route:'/cart'
    },
]

export const socialIco=[
    {
        icon:IoLogoInstagram,
        route:'instagram.com'
    },
    {
        icon:SlSocialFacebook,
        route:'facebook.com'
    },
    {
        icon:PiYoutubeLogo,
        route:'youtube.com'
    },
]