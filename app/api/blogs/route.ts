import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from "next/server";
import Blog from '@/models/Blog';

export const POST = async(request:Request,response:NextResponse)=>{
    try {
        const {title,description}= await request.json();
        await connectMongoDB();
        const blog = await Blog.create({title,description});
        return NextResponse.json({message:"Blog Created",blog},{status:201});

    } catch (error) {
        return NextResponse.json({message:error},{status:500});
        
    }
}


export const GET = async(request:Request,response:NextResponse)=>{
    try {
         await connectMongoDB();
         const blogs = await Blog.find();
         return NextResponse.json({blogs},{status:200})
    } catch (error) {
        return NextResponse.json({message:error},{status:500});
    }
}