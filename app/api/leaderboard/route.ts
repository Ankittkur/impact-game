import {NextResponse} from "next/server";
import {leaderboard,totalCoins} from "@/lib/store";
export async function GET(){
 return NextResponse.json({leaderboard,totalCoins,donated:Math.floor(totalCoins/10)});
}