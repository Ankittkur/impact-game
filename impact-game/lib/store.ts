export let leaderboard:{name:string;coins:number}[]=[];
export let totalCoins=0;
export function addScore(name:string,coins:number){
 totalCoins+=coins;
 const u=leaderboard.find(x=>x.name===name);
 u?u.coins+=coins:leaderboard.push({name,coins});
 leaderboard.sort((a,b)=>b.coins-a.coins);
 leaderboard=leaderboard.slice(0,10);
}