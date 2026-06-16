"use client";

import Image from "next/image";

export default function Error({
  error,
}: {
  error: Error;
}){
  
  console.log("error1", error);

  let message = "متاسفانه خطایی رخ داده است!";
  if(error.message){
    message = error.message;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-6 grow">
      <Image
        src="/images/logo.png"
        alt="ganjoor logo"
        width={112}
        height={112}
        className="w-20 h-20 md:w-28 md:h-28 mx-auto"
        sizes="(max-width: 767px) 80px, 112px"
        priority
        fetchPriority="high"
      />
      
      <hr />
      {message}
    </div>
  );
}
