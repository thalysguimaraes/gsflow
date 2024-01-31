'use client';

import * as React from "react"
import { PlayCircle, PauseCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image";

export default function Page() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <Card className="w-[400px]">
        <CardHeader>
          <div className="flex flex-col items-center">
            <Image 
              src="/goodslogo.svg" 
              alt="Next.js" 
              width={18} 
              height={18} 
              className='transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-180 duration-500 dark:filter dark:invert mb-4 mt-2' 
            />
            <div>
              <CardDescription className="text-sm text-center">Você está ouvindo a rádio da loja:</CardDescription>
              <CardTitle className="text-md text-center mb-4">Center Shopping</CardTitle>
            </div>
          </div>

        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <Progress value={progress} className="w-[82%] h-[10px]" />
            <div className="flex gap-2 pb-4">
            <Button variant="ghost" size="icon">
              <PlayCircle className="h-8 w-8" />
            </Button>
                <div>
                <div className="text-md font-bold">Thinking of You</div>
            <div className="text-xs text-slate-500">Ed Sheeran</div>
                </div>
            </div>
            

          </div>
        </CardContent>
        <CardFooter className="flex justify-center mt-2">
          <Button variant="secondary" className="w-full" onClick={() => window.location.href='/stores'}>Reportar problema</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

