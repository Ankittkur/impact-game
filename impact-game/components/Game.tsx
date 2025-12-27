"use client";
import {useState} from "react";
export default function Game({onFinish}:{onFinish:(c:number)=>void}){
 const[start,setStart]=useState<number|null>(null);
 const[msg,setMsg]=useState("Wait for green…");
 function begin(){setMsg("Get ready...");setTimeout(()=>{setStart(Date.now());setMsg("CLICK!")},Math.random()*2000+1000)}
 function click(){if(!start)return;const r=Date.now()-start;const c=Math.max(1,Math.floor(500/r));onFinish(c);setMsg(`You earned ${c} coins`);setStart(null)}
 return <div className="card"><h3>⚡ Reaction Challenge</h3><p>{msg}</p>{!start?<button onClick={begin}>Start</button>:<button onClick={click}>Click!</button>}</div>
}