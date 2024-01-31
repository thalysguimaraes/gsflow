'use client';

import { Toaster } from '@/components/ui/toaster';
import { useToast } from "@/components/ui/use-toast"
import { Trash } from 'lucide-react';
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

type Store = {
  id: number;
  name: string;
  location: string;
  url: string;
  avatarFallback: string;
  spotNumber: string;
  
};

const dummyStores: Store[] = [
  { id: 1, name: 'Center Shopping', location: 'Uberlândia - MG', url: 'https://radioalg.ar/center-shopping', avatarFallback: 'CS', spotNumber: '3' },
  { id: 2, name: 'Uberlândia Shopping', location: 'Uberlândia - MG', url: 'https://radioalg.ar/udi-shopping', avatarFallback: 'US', spotNumber: '2' },
  { id: 3, name: 'Afonso Pena', location: 'Uberlândia - MG', url: 'https://radioalg.ar/afonso-pena', avatarFallback: 'AP', spotNumber: '4' },
  { id: 4, name: 'Terminal Central', location: 'Uberlândia - MG', url: 'https://radioalg.ar/terminal-central', avatarFallback: 'TC', spotNumber: '2' },
  { id: 5, name: 'Lecitel', location: 'Uberlândia - MG', url: 'https://radioalg.ar/lecitel', avatarFallback: 'LT', spotNumber: '3' },
  // Add more dummy stores as needed
];

export default function Page() {
  const { toast } = useToast()
  const [stores, setStores] = useState<Store[]>(dummyStores);
  const [newStoreName, setNewStoreName] = useState('');
  const [newStoreLocation, setNewStoreLocation] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State variable for dialog open/closed

  const handleAddStore = () => {
    const newStore = { 
      id: Date.now(), 
      name: newStoreName, 
      location: newStoreLocation,
      url: '', // Add a default url or generate one
      avatarFallback: '',
      spotNumber: '' // Add a default spotNumber based on the length of the stores array
    };
    setStores(prevStores => [...prevStores, newStore]);
    setNewStoreName('');
    setNewStoreLocation('');
    setIsDialogOpen(false); // Close the dialog

    // Added toast with a delay
    setTimeout(() => {
      toast({
        title: "Loja criada",
        description: "A nova loja foi salva com sucesso.",
      });
    }, 500); // Delay of 500ms
  };

  const handleRemoveStore = (storeId: number) => {
    setStores(prevStores => prevStores.filter(store => store.id !== storeId));
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
        <h1 className="text-4xl font-semibold mb-2">Lojas</h1>
        <p className="text-sm text-slate-500">Cadastre as lojas Algar Telecom que terão suas rádios</p>
        </div>

<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Criar nova</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Criar loja</DialogTitle>
            <DialogDescription>
              Use essa função para criar uma nova loja. Cada uma delas terá uma URL de rádio única.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-4">
            <div className="grid grid-cols-1 items-start gap-2 mb-4">
              <Label htmlFor="name" className="text-left">
                Nome da loja
              </Label>
              <Input
                id="name"
                value={newStoreName}
                onChange={(e) => setNewStoreName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 items-start gap-2">
              <Label htmlFor="location" className="text-left">
                Cidade
              </Label>
              <Input
                id="location"
                value={newStoreLocation}
                onChange={(e) => setNewStoreLocation(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={() => {
              handleAddStore();
            }}>Salvar nova loja</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      </div>


      <div className="flex justify-center p-8 w-full">
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nome da loja</TableHead>
      <TableHead>Cidade</TableHead>
      <TableHead>URL da rádio</TableHead>
      <TableHead>Anúncios cadastrados</TableHead>
      <TableHead className="text-right"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {stores.map((store) => (
      <TableRow key={store.id}>
        <TableCell className="font-semibold flex items-center gap-4">
          <Avatar>
            <AvatarImage src={'/'} alt={store.name} />
            <AvatarFallback>{store.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {store.name}
        </TableCell>
        <TableCell>{store.location}</TableCell>
        <TableCell><a href="/radio" style={{textDecoration: 'underline'}}>{store.url}</a></TableCell>
        <TableCell>{store.spotNumber} anúncios</TableCell>
        <TableCell className="text-right gap-2 flex items-center justify-end">
        <Link href={`/detailed-store/`} passHref>
  <Button variant="outline" style={{textDecoration: 'none', marginRight: '1px'}}>Detalhes</Button>
</Link>
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
            Essa ação não pode ser desfeita. Os anúncios e o link da rádio dessa loja serão apagados e ficarão inacessíveis.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleRemoveStore(store.id)}>Continuar</AlertDialogAction>
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
