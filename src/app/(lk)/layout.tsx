import type { PropsWithChildren } from "react";
export default function DashBoardLayout({children}:PropsWithChildren<unknown>){
   return (
   <div>
       <h1>
         DashBoardLayout 
      </h1>
      {children}
   </div>
   )
}