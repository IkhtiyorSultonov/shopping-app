import { HomePageComponents } from "@/page-components";
import { GetServerSideProps } from "next";
import Cookies from 'js-cookie';
export default function Home() {
  return (
    <HomePageComponents/>
  );
}

export const getServerSideProps:GetServerSideProps=async({req})=>{
  const auth=req.cookies.email
  if(!auth){
    return{
      redirect:{
        destination:'/auth',
        permanent:false,
      }
    }
  }

  return{
    props:{}
  }
}