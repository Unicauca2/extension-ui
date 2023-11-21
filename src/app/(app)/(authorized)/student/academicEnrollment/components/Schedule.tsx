import {Box, Icon}from '@mui/material';

interface Props{
    dragActive: any,
    setDragActive: any,
    dragSubject: any,
    days:{
        id: number, 
        name: string
    }[],
    hours:{
        id:number,
        content:string
    }[]
    subjectsEnable:{
        id: number;
        name: string;
        code?: string;
        classroom?: string;
        color: string;
        slots:{
            idDay: number;
            idStart: number;
            duration: number;  
        }[]
    }[]
}

export default function Schedule ({dragActive, setDragActive, dragSubject, days, hours, subjectsEnable}:Props){ 

    return(
        <Box className="h-full flex">
            <Box className="w-full">
                <Box className="bg-[#0772B5] text-white font-semibold text-center">
                    Hora
                </Box>
                {                
                    hours.map((item, index) => (
                        ((index.valueOf()%2)==0 && index.valueOf()<(hours.length-2) && index.valueOf()!=6)?
                        <div key={index} className='bg-white h-[58px] border border-[#0772B5] text-black text-center align-middle'>
                            <p>{item.content+" - "+hours[index.valueOf()+2].content}</p>
                        </div>:null
                    ))
                }
            </Box>
            {
                days.map((itemD, indexD) => (
                    <Box key={indexD} className="w-full">
                        <Box className="bg-[#0772B5] text-white font-semibold text-center">
                            {itemD.name}
                        </Box>
                        {
                        }
                    </Box>
                ))
            }
        </Box>
    );
}