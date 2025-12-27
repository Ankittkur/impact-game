import {NextResponse} from "next/server";
import {addScore} from "@/lib/store";
export async function POST(req:Request){
 const {name,coins}=await req.json();
 addScore(name,coins);
 return NextResponse.json({success:true});
}