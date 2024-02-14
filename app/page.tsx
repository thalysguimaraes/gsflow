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
      <div className="flex items-center justify-center min-h-screen bg-slate-100" style={{height: '100vh'}}>

          <Card className="w-full px-36 py-48" style={{width: '50vw', height: '100vh'}}>
            <CardHeader>
              <div className="flex justify-center">
              <Image 
            src="/tecnomyl.jpg" 
            alt="Next.js" 
            width={169} 
            height={46} 
            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-180 duration-500 dark:filter dark:invert mb-12 mt-2 mix-blend-multiply' 
            />
              </div>
              <CardTitle className="text-center text-3xl -mb-1">Faça seu login</CardTitle>
              <CardDescription className="text-center text-md">Bem-vindo de volta! Preencha seus dados:</CardDescription>
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
            <CardFooter className="flex flex-col justify-center mt-2 space-y-2">
              <Button className="w-full" onClick={() => window.location.href='/home-ctc'}>Fazer login</Button>
              <Button variant="outline" className="w-full" onClick={() => window.location.href='/stores'}>Esqueci minha senha</Button>
            </CardFooter>
          </Card>
          <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/geometricbg.svg')", width: '50vw', height: '100vh' }}></div>
        </div>

    )
  }
