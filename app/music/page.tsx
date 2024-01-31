'use client';

import { Copy, ArrowLeft, Trash, Music2 } from 'lucide-react';
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

type Music = {
  id: number;
  name: string;
  artist: string;
  duration: string;
  url: string;
  avatarFallback: string;
  
};

const dummyMusics: Music[] = [
  { id: 1, name: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '03:48', url: 'https://radioalg.ar/musics/1237854.mp3', avatarFallback: 'CJ' },
  { id: 2, name: 'Shape of You', artist: 'Ed Sheeran', duration: '03:53', url: 'https://radioalg.ar/musics/1237855.mp3', avatarFallback: 'SY' },
  { id: 3, name: 'Perfect', artist: 'Ed Sheeran', duration: '04:23', url: 'https://radioalg.ar/musics/1237856.mp3', avatarFallback: 'PF' },
  { id: 4, name: 'Castle on the Hill', artist: 'Ed Sheeran', duration: '04:20', url: 'https://radioalg.ar/musics/1237857.mp3', avatarFallback: 'CH' },
  { id: 5, name: 'Galway Girl', artist: 'Ed Sheeran', duration: '02:50', url: 'https://radioalg.ar/musics/1237858.mp3', avatarFallback: 'GG' },
  { id: 6, name: 'Photograph', artist: 'Ed Sheeran', duration: '04:18', url: 'https://radioalg.ar/musics/1237859.mp3', avatarFallback: 'PH' },
  { id: 7, name: 'Happier', artist: 'Ed Sheeran', duration: '03:27', url: 'https://radioalg.ar/musics/1237860.mp3', avatarFallback: 'HP' },
  { id: 8, name: 'Supermarket Flowers', artist: 'Ed Sheeran', duration: '03:41', url: 'https://radioalg.ar/musics/1237861.mp3', avatarFallback: 'SF' },
  { id: 9, name: 'Dive', artist: 'Ed Sheeran', duration: '03:58', url: 'https://radioalg.ar/musics/1237862.mp3', avatarFallback: 'DV' },
  { id: 10, name: 'Don\'t', artist: 'Ed Sheeran', duration: '03:39', url: 'https://radioalg.ar/musics/1237863.mp3', avatarFallback: 'DT' },
  { id: 11, name: 'Bad Habits', artist: 'Ed Sheeran', duration: '03:51', url: 'https://radioalg.ar/musics/1237864.mp3', avatarFallback: 'BH' },
];

export default function Page() {
  const [Musics, setMusics] = useState<Music[]>(dummyMusics);
  const [newMusicName, setNewMusicName] = useState('');
  const [newMusicduration, setNewMusicduration] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State variable for dialog open/closed

  const handleAddMusic = () => {
    const newMusic = { 
      id: Date.now(), 
      name: newMusicName, 
      duration: newMusicduration,
      url: '', // Add a default url or generate one
      artist: '', // Add a default artist or generate one
      avatarFallback: '',
    };
    setMusics(prevMusics => [...prevMusics, newMusic]);
    setNewMusicName('');
    setNewMusicduration('');
    setIsDialogOpen(false); // Close the dialog
  };

  const handleRemoveMusic = (MusicId: number) => {
    setMusics(prevMusics => prevMusics.filter(Music => Music.id !== MusicId));
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

      
      <div className="flex justify-between items-center py-12 px-8">
        
        <div>
        <h1 className="text-4xl font-semibold mb-2">Playlist</h1>
        <p className="text-sm text-slate-500">Essas músicas são compartilhadas entre todas as rádios</p>
        </div>




<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Adicionar música</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Adicionar música</DialogTitle>
            <DialogDescription>
            Suba um arquivo de música para a playlist. Essa música fará parte da programação de todas as lojas.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-4">
            <div className="grid grid-cols-1 items-start gap-2 mb-4">
              <Label htmlFor="name" className="text-left">
                Nome da música
              </Label>
              <Input
                id="name"
                value={newMusicName}
                onChange={(e) => setNewMusicName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 items-start gap-2 mb-4">
              <Label htmlFor="artist" className="text-left">
                Artista
              </Label>
              <Input
                id="artist"
              />
            </div>
            
            <div className="grid grid-cols-1 items-start gap-2">
              <Label htmlFor="duration" className="text-left">
                Selecione o arquivo de áudio
              </Label>
              <Input
              type="file"
                id="duration"
                value={newMusicduration}
                onChange={(e) => setNewMusicduration(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleAddMusic}>Adicionar música</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      </div>


      <div className="flex justify-center p-8 w-full">
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Música</TableHead>
      <TableHead>Artista</TableHead>
      <TableHead>Duração</TableHead>
      <TableHead>URL do arquivo</TableHead>
      <TableHead className="text-right"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {Musics.map((Music) => (
      <TableRow key={Music.id}>
        <TableCell className="font-semibold flex items-center gap-4">
          <Avatar>
            <AvatarImage src={'/'} alt={Music.name} />
            <AvatarFallback><Music2 /></AvatarFallback>
          </Avatar>
          {Music.name}
        </TableCell>
        <TableCell> {Music.artist}</TableCell>
        <TableCell>{Music.duration}</TableCell>
        <TableCell><a href={Music.url} style={{textDecoration: 'underline'}}>{Music.url}</a></TableCell>
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
            Essa ação não pode ser desfeita. Essa música será apagada do sistema e vai sair da programação de todas as rádios.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleRemoveMusic(Music.id)}>Continuar</AlertDialogAction>
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
