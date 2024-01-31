'use client';

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";

export default function Page() {

    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <Card className="w-[400px]">
          <CardHeader>
            <div className="flex justify-center">
            <Image 
          src="/goodslogo.svg" 
          alt="Next.js" 
          width={36} 
          height={36} 
          className='transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-180 duration-500 dark:filter dark:invert mb-4 mt-2' 
          />
            </div>
            <CardTitle className="text-center -mb-1">Bem-vindo de volta!</CardTitle>
            <CardDescription className="text-center">Administre as rádios Algar Telecom</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 mt-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Seu e-mail</Label>
                  <Input id="name" placeholder="Use um endereço válido" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Sua senha</Label>
                  <Input id="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center mt-2">
            <Button className="w-full" onClick={() => window.location.href='/stores'}>Fazer login</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
