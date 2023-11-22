"use client";
import {Stack, IconButton } from '@mui/material';
import {AccountCircleOutlined, LogoutOutlined} from "@mui/icons-material";
import { useRouter, usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link';

interface Props {
  user:{
    id: string,
    name: string
  }
}
export default function TopNavBar({user}: Props) {
  const router = useRouter();
  const pathname = usePathname().split("/");
  let cummulativeCrumb = "";
  
  return ( 
    <div className="w-full min-w-[450px] rounded-bl-3xl rounded-tr-3xl bg-[#ffffff] px-4 py-2 mb-3 align-top">
      <Stack direction="row" className="items-center justify-between"> 
        <div className="relative left-0 align-top h-full">
          {pathname.map((crumb, index) => {
            cummulativeCrumb += crumb + "/"
            return <Link key={index} href={cummulativeCrumb}
              className="text-[#000066] font-semibold font-sans text-base hover:border-b-[#F58220] border-[#ffffff] border-b-2">
              {crumb}/
            </Link>})}
        </div>
        <div className="relative right-0">
          <Stack direction="row" alignItems="center"  spacing={0.5}>
            <p className="h-full text-[#000066] font-semibold font-sans text-base" > {user.name} </p>
            <IconButton aria-label="delete" className="text-[#000066]" onClick={() => {console.log('User button');}}>
              <AccountCircleOutlined />
            </IconButton>
            <IconButton aria-label="delete" className="text-[#000066] " onClick={() => {console.log('LogOut button');}}>
              <LogoutOutlined />
            </IconButton>
          </Stack>
        </div>
      </Stack>
    </div>
  )
}
