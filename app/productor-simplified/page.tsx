'use client';

import { Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { UserNav } from "@/components/user-nav";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from '@/components/ui/button';

type Client = {
  id: number;
  productName: string;
  document: string; // CPF or CNPJ
  status: 'Pendente' | 'Proposta Enviada' | 'Proposta Concluída';
  clientProfile: 'Produtor' | 'Empresa Agropecuária' | 'Cooperativa' | 'Distribuidor';
  previousCropLimit: number; // Value in millions
};

const dummyClients: Client[] = [
  { id: 1, productName: 'Armelindo Ferrari Junior', document: '123.456.789-00', status: 'Pendente', clientProfile: 'Produtor', previousCropLimit: 1000000 },
  { id: 2, productName: 'Agropecuária Ipuã Ltda.', document: '98.765.432/0001-00', status: 'Proposta Enviada', clientProfile: 'Cooperativa', previousCropLimit: 2000000 },
  { id: 3, productName: 'Ednaldo de Almeida Silva', document: '123.456.789-00', status: 'Proposta Concluída', clientProfile: 'Empresa Agropecuária', previousCropLimit: 1500000 },
  // Add more dummy clients as needed
];

export default function Page() {
  const [clients, setClients] = useState<Client[]>(dummyClients);

  return (
    <div className="flex flex-col w-full">
      <div className="border-b flex justify-between py-6 px-8">
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


<div className="flex w-full px-4">
  <div className="w-1/3 p-6"> {/* Increased internal padding and added hover effect */}
    <div className="h-36 bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-center items-start gap-6 relative hover:shadow-xl transition duration-300 ease-in-out"> {/* Increased internal padding and gap, added relative for absolute positioning and smooth transition on hover */}
      <div className="flex flex-col justify-center items-start gap-4"> {/* Increased gap between circle and number */}
        <div className="w-5 h-5 p-1.5 bg-zinc-400 rounded-xl flex justify-center items-center">
          <svg className="w-2.5 h-2.5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> {/* Added user icon */}
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="text-zinc-400 text-5xl font-semibold">28</div>
          <div className="text-gray-900 text-md font-medium">Clientes na carteira</div>
        </div>
      </div>
      <div className="absolute right-4 top-4"> {/* Pinned pill to the right */}
        <div className="px-2 py-0.5 bg-amber-50 rounded-2xl flex justify-start items-center">
          {/* <div className="text-center text-amber-700 text-xs font-medium">28.5%</div> */}
        </div>
      </div>
    </div>
  </div>
  <div className="w-1/3 p-6"> {/* Increased internal padding and added hover effect */}
    <div className="h-36 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200 p-6 flex flex-col justify-center items-start gap-6 relative hover:shadow-xl transition duration-300 ease-in-out"> {/* Increased internal padding and gap, added relative for absolute positioning */}
      <div className="flex flex-col justify-center items-start gap-4"> {/* Increased gap between circle and number */}
        <div className="w-5 h-5 p-1.5 bg-red-400 rounded-xl flex justify-center items-center">
          <svg className="w-2.5 h-2.5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> {/* Added user icon */}
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="text-red-400 text-5xl font-semibold">8</div>
          <div className="text-gray-900 text-md font-medium">Clientes pendentes</div>
        </div>
      </div>
      <div className="absolute right-4 top-4"> {/* Pinned pill to the right */}
        <div className="px-2 py-0.5 bg-amber-50 rounded-2xl flex justify-start items-center">
          <div className="text-center text-amber-700 text-xs font-medium">28.5%</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-1/3 p-6"> {/* Increased internal padding and added hover effect */}
    <div className="h-36 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-600 p-6 flex flex-col justify-center items-start gap-6 relative hover:shadow-xl transition duration-300 ease-in-out"> {/* Increased internal padding and gap, added relative for absolute positioning */}
      <div className="flex flex-col justify-center items-start gap-4"> {/* Increased gap between circle and number */}
        <div className="w-5 h-5 p-1.5 bg-green-600 rounded-xl flex justify-center items-center">
          <svg className="w-2.5 h-2.5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> {/* Added user icon */}
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="text-green-600 text-5xl font-semibold">20</div>
          <div className="text-gray-900 text-md font-medium">Clientes com proposta enviada</div>
        </div>
      </div>
      <div className="absolute right-4 top-4"> {/* Pinned pill to the right */}
        <div className="px-2 py-0.5 bg-green-600 bg-opacity-10 rounded-2xl flex justify-start items-center">
          <div className="text-center text-green-600 text-xs font-medium">71.4%</div>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="flex justify-center p-8 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Perfil do cliente</TableHead>
              <TableHead>Limite (safra anterior)</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-semibold">
                  <div>{client.productName}</div>
                  <div className="text-sm text-slate-500">{client.document}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{client.status}</Badge>
                </TableCell>
                <TableCell>
                <Badge variant="outline">{client.clientProfile}</Badge>
                </TableCell>
                <TableCell>R$ {client.previousCropLimit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                <TableCell className="text-right">
                  <Button variant={'outline'}>Criar proposta</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </div>

  <div className="w-full mt-6 px-6 rounded-lg border border-gray-200 bg-gray-50">
  <div className="w-full h-16 flex flex-col justify-start items-start gap-5">
    <div className="w-full px-6 pt-5 flex justify-start items-start gap-4">
      <div className="flex-grow flex flex-col justify-between items-start">
        <div className="flex justify-between items-center w-full">
          <div className="text-gray-900 text-lg font-semibold">Continue preenchendo</div>
          <div className="px-2 py-0.5 bg-amber-50 rounded-2xl flex justify-start items-center">
            <div className="text-center text-amber-700 text-xs font-medium">2 propostas paradas com você</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full px-6 border-t border-gray-200 flex flex-col justify-start items-start gap-2.5">
    <div className="flex flex-col justify-start items-start w-full">
      <div className="w-full py-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3.5">
          <div className="text-green-700 text-sm font-semibold underline">Armelindo Ferrari Junior</div>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="flex justify-end items-center gap-3">
            <div className="px-2 py-0.5 bg-amber-50 rounded-2xl flex justify-start items-center">
              <div className="text-center text-amber-700 text-xs font-medium">Proposta voltou</div>
            </div>
            <div className="px-2 py-0.5 bg-gray-100 rounded-2xl flex justify-start items-center">
              <div className="text-center text-slate-700 text-xs font-medium">Há 2 dias com você</div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3">
            <div>
              <Button variant={'outline'}>Continuar</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 border-t border-gray-200 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3.5">
          <div className="text-green-700 text-sm font-semibold underline">Ednaldo de Almeida Silva</div>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="flex justify-end items-center gap-3">
            <div className="px-2 py-0.5 bg-red-50 rounded-2xl flex justify-start items-center">
              <div className="text-center text-red-700 text-xs font-medium">Há 5 dias com você</div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3">
            <div>
            <Button variant={'outline'}>Continuar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
