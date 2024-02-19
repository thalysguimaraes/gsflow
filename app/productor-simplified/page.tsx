'use client';

import { Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { UserNav } from "@/components/user-nav";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function Page() {

  return (
    <div className="flex flex-col w-full bg-slate-50">
      <div className="border-b flex justify-between py-6 px-8 bg-white">
      <Image 
        src="/tecnomyl.jpg" 
        alt="Next.js" 
        width={124} 
        height={24} 
        className='transition ease-in-out delay-150 hover:-translate-y-1 duration-500 dark:filter' 
        />

        {/* <MainNav /> */}

        <div className='flex justify-end gap-4 content-center'>
        {/* <ModeToggle /> */}
        <UserNav />
        </div>
      </div>

      <div className="flex justify-between items-center py-12 px-8">
      
      <div>
      <Button variant={'outline'}>Fechar</Button>
        </div>
        <Button variant={'outline'}>Enviar para o cliente <Send className='ml-2 w-5 h-5' /></Button>
      </div>

      <div className='mx-8 p-10 border border-zinc-200 rounded-lg bg-white'>
      <div className='flex justify-between items-center'>
        
      <div className='flex gap-6 items-center'>
        <Avatar>
          <AvatarFallback>
            FD
          </AvatarFallback>
        </Avatar>
        <div>
        <div className="text-zinc-900 text-4xl font-semibold mb-1">Fabiano Dall Asta</div>
          <div className="text-zinc-600 text-md font-regular">963.604.290-04</div>
        </div>
        </div>
        <Badge className='h-7'>Produtor</Badge>
        </div>

        <div className='w-full pt-12 flex gap-8'>
        
        <div className="grid w-1/2 items-center gap-1.5">
      <Label htmlFor="email">Tempo no Cultivo da Cultura Principal</Label>
      <Input disabled type="email" id="email" placeholder="19 anos" />
      </div>

      <div className="grid w-1/2 items-center gap-1.5">
      <Label htmlFor="email">Tempo de Relacionamento com o Cliente</Label>
      <Input disabled type="email" id="email" placeholder="1 ano, 3 meses" />
      </div>

        </div>
        

      </div>

      <div className='mx-8 p-10 border border-zinc-200 rounded-lg mt-12 bg-white mb-16'>
      <div className="text-zinc-900 text-xl font-semibold mb-1 mb-8">Conceito comercial</div>

        <div className='w-full flex gap-8'>
        
        <div className="grid w-1/2 items-center gap-1.5">
      <Label htmlFor="email">Previsão de vendas</Label>
      <Input id="email" placeholder="R$" />
      </div>

      <div className="grid w-1/2 items-center gap-1.5">
      <Label htmlFor="email">Trabalhou com o cliente em outras Companhias?</Label>
      <Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="yes">Sim</SelectItem>
    <SelectItem value="no">Não</SelectItem>
  </SelectContent>
</Select>
      </div>

        </div>

        <div className='w-full pt-12'>
        <div className="grid items-center gap-1.5">
      <Label htmlFor="email">Histórico do(s) Produtor(es) na Região</Label>
      <Input id="email" className='h-36' />
      </div>
        </div>


                <div className='w-full flex gap-8 mt-12'>
        

      <div className="grid w-1/3 items-center gap-1.5">
      <Label htmlFor="email">Cultiva a cultura principal desde?</Label>
      <Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="yes">2024</SelectItem>
    <SelectItem value="no">2023</SelectItem>
  </SelectContent>
</Select>
      </div>

      <div className="grid w-1/3 items-center gap-1.5">
      <Label htmlFor="email">Houve aumento de área no último ano?</Label>
      <Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="yes">Sim</SelectItem>
    <SelectItem value="no">Não</SelectItem>
  </SelectContent>
</Select>
      </div>

      <div className="grid w-1/3 items-center gap-1.5">
      <Label htmlFor="email">Capacidade de Armazenagem Própria?</Label>
      <Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="yes">Sim</SelectItem>
    <SelectItem value="no">Não</SelectItem>
  </SelectContent>
</Select>
      </div>

        </div>

        <div className='w-full flex gap-8 mt-12'>
        

        <div className="grid w-1/3 items-center gap-1.5">
        <Label htmlFor="email">Principais fornecedores</Label>
        <Select>
    <SelectTrigger>
      <SelectValue placeholder="Selecione uma opção" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="yes">Fornecedor 1</SelectItem>
      <SelectItem value="no">Fornecedor 2</SelectItem>
    </SelectContent>
  </Select>
        </div>
  
        <div className="grid w-1/3 items-center gap-1.5">
        <Label htmlFor="email">Tipo de garantia negociada</Label>
        <Select>
    <SelectTrigger>
      <SelectValue placeholder="Selecione uma opção" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="yes">Opção 1</SelectItem>
      <SelectItem value="no">Opção 2</SelectItem>
    </SelectContent>
  </Select>
        </div>
  
        <div className="grid w-1/3 items-center gap-1.5">
        <Label htmlFor="email">Cliente atua com Barter com fornecedores?</Label>
        <Select>
    <SelectTrigger>
      <SelectValue placeholder="Selecione uma opção" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="yes">Sim</SelectItem>
      <SelectItem value="no">Não</SelectItem>
    </SelectContent>
  </Select>
        </div>
  
          </div>

          <div className='w-full pt-12'>
        <div className="grid items-center gap-1.5">
      <Label htmlFor="email">Observações finais</Label>
      <Input id="email" className='h-36' />
      </div>
        </div>
        

      </div>


    </div>
  );
}
