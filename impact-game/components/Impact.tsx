"use client";
import {useEffect,useState} from "react";
export default function Impact(){
 const[d,setD]=useState<any>(null);
 useEffect(()=>{fetch("/api/leaderboard").then(r=>r.json()).then(setD)},[]);
 if(!d)return null;
 return <div className="card"><h3>🌍 Live Impact</h3><p>Total Coins: {d.totalCoins}</p><p>Meals Unlocked: {d.donated}</p><p>Next meal in {10-d.totalCoins%10} coins</p></div>
}