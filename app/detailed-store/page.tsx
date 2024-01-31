'use client';

import { Copy, ArrowLeft, Megaphone, Trash } from 'lucide-react';
import { MainNav } from '@/components/main-nav';
import { useState, useEffect } from 'react';
import { UserNav } from "@/components/user-nav";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Audio = {
  id: number;
  name: string;
  duration: string;
  url: string;
  avatarFallback: string;
  
};

const dummyAudios: Audio[] = [
  { id: 1, name: 'Campanha Janeiro - Agência', duration: '01:21', url: 'https://radioalg.ar/audios/1237854.mp3', avatarFallback: 'CJ' },
  { id: 2, name: 'Campanha - De iPhone Novo', duration: '00:48', url: 'https://radioalg.ar/audios/1246734.mp3', avatarFallback: 'CD' },
  { id: 3, name: 'Campanha - Internet 600mbps', duration: '01:01', url: 'https://radioalg.ar/audios/12367465.mp3', avatarFallback: 'CI' },
  // Add more dummy Audios as needed
];

export default function Page() {
  const [Audios, setAudios] = useState<Audio[]>(dummyAudios);
  const [newAudioName, setNewAudioName] = useState('');
  const [newAudioDuration, setNewAudioDuration] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State variable for dialog open/closed

  const handleAddAudio = () => {
    const newAudio = { 
      id: Date.now(), 
      name: newAudioName, 
      duration: newAudioDuration,
      url: '', // Add a default url or generate one
      avatarFallback: '',
      spotNumber: '' // Add a default spotNumber based on the length of the Audios array
    };
    setAudios(prevAudios => [...prevAudios, newAudio]);
    setNewAudioName('');
    setNewAudioDuration('');
    setIsDialogOpen(false); // Close the dialog
  };

  const handleRemoveAudio = (audioId: number) => {
    setAudios(prevAudios => prevAudios.filter(audio => audio.id !== audioId));
  };

  return (
    <div className="flex flex-col w-full">
      <div className="border-b flex justify-between py-6 px-8">
        <Image 
          src="/goodslogo.svg" 
          alt="Next.js" 
          width={24} 
          height={24} 
          className='transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-180 duration-500 dark:filter dark:invert' 
        />
        <MainNav />
        <div className='flex justify-end gap-4 content-center'>
          <ModeToggle />
          <UserNav />
        </div>
      </div>

      <div className="flex justify-between pt-12 px-8">
        <Link href="/stores" passHref>
          <Button variant="outline" style={{textDecoration: 'none'}}>
            <ArrowLeft className="-ml-1 mr-2 h-4 w-4" />Voltar para Lojas
          </Button>
        </Link>
      </div>
      
      <div className="flex justify-between py-12 px-8">
        <h1 className="text-4xl font-semibold">Center Shopping</h1>
        <div className="flex gap-2 items-center" style={{width: '500px'}}>
          <Label className="text-left flex-shrink-0 mr-2" style={{whiteSpace: 'nowrap'}}>
            URL da rádio
          </Label>
          <Input disabled type="text" placeholder="https://radioalg.ar/center-shopping" style={{flexGrow: 1}} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" style={{flexBasis: 'auto', flexShrink: 0}}>
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copiar URL</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Adicionar anúncio</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Adicionar anúncio</DialogTitle>
            <DialogDescription>
              Use essa função para subir um áudio de anúncio na rádio dessa loja. Eles serão adicionados randomicamente à ordem da programação.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-4">
            <div className="grid grid-cols-1 items-start gap-2 mb-4">
              <Label htmlFor="name" className="text-left">
                Nome do anúncio
              </Label>
              <Input
                id="name"
                value={newAudioName}
                onChange={(e) => setNewAudioName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 items-start gap-2">
              <Label htmlFor="duration" className="text-left">
                Selecione o arquivo de áudio
              </Label>
              <Input
                type="file"
                id="duration"
                onChange={(e) => setNewAudioDuration(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleAddAudio}>Salvar anúncio</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
      <div className="flex justify-center p-8 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do anúncio</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>URL do arquivo</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Audios.map((audio) => (
              <TableRow key={audio.id}>
                <TableCell className="font-semibold flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={'/'} alt={audio.name} />
                    <AvatarFallback><Megaphone /></AvatarFallback>
                  </Avatar>
                  {audio.name}
                </TableCell>
                <TableCell>{audio.duration}</TableCell>
                <TableCell><a href={audio.url} style={{textDecoration: 'underline'}}>{audio.url}</a></TableCell>
                <TableCell className="text-right gap-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="icon" style={{flexBasis: 'auto', flexShrink: 0}}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Essa ação não pode ser desfeita. Esse anúncio será apagado do sistema e vai sair da programação dessa rádio.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleRemoveAudio(audio.id)}>Continuar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

