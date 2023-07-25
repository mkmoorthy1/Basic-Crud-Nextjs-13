import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from "next/server";
import Blog from '@/models/Blog';

export const GET = async(request:Request,{params}:{ params: { id: string } })=>{
   try {
        const {id} = params;
        await connectMongoDB();
      //   console.log(id);
        const blog = await Blog.findById(id);
        if(!blog){
           return NextResponse.json({ message: "Blog Not Found" }, { status: 404 });  
        } 
        return NextResponse.json({blog},{status:200})
   } catch (error) {
        return NextResponse.json({message:error},{status:500})
   }
}

export const DELETE = async(request:Request,{params}:{ params: { id: string } })=>{
   try {
        const {id} = params;
        await connectMongoDB();
       
        const blog = await Blog.findByIdAndDelete(id);
        if(!blog){
           return NextResponse.json({ message: "Blog Not Found" }, { status: 404 });  
        } 
        return NextResponse.json({message:"Blog Deleted"},{status:200});
   } catch (error) {
        return NextResponse.json({message:error},{status:500});
   }
}

export const PATCH = async(request:Request,{params}:{params: {id : string}})=>{
   try {
      const {id} = params;

      const {title,description} = await request.json();
      await connectMongoDB();
      
      const blog = await Blog.findByIdAndUpdate(id,{title,description},{new: true});
      
      if(!blog){
           return NextResponse.json({ message: "Blog Not Found" }, { status: 404 });  
      }

        return NextResponse.json({message:"Blog Updated",blog},{status:200});


   } catch (error) {
        return NextResponse.json({message:error},{status:500});
   }
}