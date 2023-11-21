import Stack from '@mui/material/Stack';
import Image from 'next/image'
import logoConservatorio from 'public/conservatorio/logo.png'
import logoUnicauca from 'public/unicauca/logo_negro.png'

export default function ButtonBar(){
    return(
        <div className="mx-auto rounded-xl bg-[#ffffff] justify-center">
            <Stack direction="row" className='align-middle justify-between'> 
                <Image src={logoConservatorio} className='h-[50px] w-auto mx-4 my-1' alt="logoC" />
                <Image src={logoUnicauca} className='h-[50px] w-auto mx-4 my-1' alt="logoU" />
            </Stack>
        </div>
    )
}