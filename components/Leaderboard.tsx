"use client";
import {useEffect,useState} from "react";
export default function Leaderboard(){
 const[l,setL]=useState<any[]>([]);
 useEffect(()=>{fetch("/api/leaderboard").then(r=>r.json()).then(d=>setL(d.leaderboard))},[]);
 return <div className="card"><h3>🏆 Top Impact Makers</h3>{l.map((u,i)=><p key={i}>{i+1}. {u.name} — {u.coins}</p>)}</div>
}