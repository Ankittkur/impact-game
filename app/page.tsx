"use client";
import {useState} from "react";
import Game from "@/components/Game";
import Impact from "@/components/Impact";
import Leaderboard from "@/components/Leaderboard";
export default function Home(){
 const[name,setName]=useState("");
 async function submit(c:number){
  await fetch("/api/play",{method:"POST",body:JSON.stringify({name,coins:c})});
  location.reload();
 }
 return <main style={{padding:20,maxWidth:600,margin:"auto"}}>
  <h1>🎮 Play → Create Impact</h1>
  <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} style={{padding:10,width:"100%",marginBottom:12}}/>
  {name&&<Game onFinish={submit}/>}
  <Impact/>
  <Leaderboard/>
  <p style={{opacity:.6,fontSize:12}}>10 coins = ₹1 donated. Demo only.</p>
 </main>
}