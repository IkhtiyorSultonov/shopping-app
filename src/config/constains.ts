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

export const roomCategory=[
    {
        label:'Living Room',
        route:'/',
        img:'./images/home/livingRoom.png',
        areas:'livingRoom',
        h:'600px',
        resH:'350px'
    },
    {
        label:'Bedroom',
        route:'/',
        img:'./images/home/bedRoom.png',
        areas:'bedRoom',
        h:'290px',
        resH:'200px'
    },
    {
        label:'Kitchen',
        route:'/',
        img:'./images/home/kitchen.png',
        areas:'kitchen',
        h:'290px',
        resH:'200px'
    },
]

export const ConvenientCompanyAbout=[
    {
        img:'./images/home/fastdelivery.png',
        name:'Free Shipping',
        about:'Order above $200',

    },
    {
        img:'./images/home/money.png',
        name:'Money-back',
        about:'30 days guarntee',

    },
    {
        img:'./images/home/lock.png',
        name:'Secure Payments',
        about:'Ecured by Stripe',

    },
    {
        img:'./images/home/call.png',
        name:'24/7 Support',
        about:'Phone and Email support',
    },  
]
export const articlesNews=[
    {
        img:'./images/home/articles1.png',
        name:'7 ways to decor your home',
        ml:0
    },
    {
        img:'./images/home/articles2.png',
        name:'Kitchen organization',
        ml:5    
    },
    {
        img:'./images/home/articles3.png',
        name:'Decor your bedroom',
        ml:5  
    }
]
