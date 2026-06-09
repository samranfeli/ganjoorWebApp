import { BASE_URL } from "@/lib/api/client";
import { PoetItem } from "@/types/poet";
import Image from "next/image";
import Link from "next/link";
export default function PoetItemLink({poet,imagePriority}:{poet: PoetItem, imagePriority?:boolean}){
    return(
        <Link href={poet.fullUrl} className="group block w-20 text-center outline-none" >
            <div className={`transition-all md:group-hover:scale-105`}>
                <Image
                    src={BASE_URL + poet.imageUrl} 
                    alt={""} 
                    className="rounded-full w-20"
                    width={82} 
                    height={100} 
                    priority={imagePriority}
                    fetchPriority={imagePriority ?"high" :"low"}
                />
            </div>
            
            <h3 className="mt-2 transition-all leading-5 text-sm">{poet.nickname}</h3>

        </Link>
    )
} 