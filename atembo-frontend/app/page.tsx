"use client";
import WeeklyData from './Components/weeklyData/Data'

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <WeeklyData/>
    </main>
    </div>
  )
}
