'use client';

import { MainNav } from '@/components/main-nav';
import { useState, useEffect } from 'react';
import { UserNav } from "@/components/user-nav";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Table,
  TableBody,
  TableCaption,
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

import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';



const supabaseUrl = 'https://tcpvihnflazigjqayqdy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcHZpaG5mbGF6aWdqcWF5cWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyOTE1NjgsImV4cCI6MjAyMTg2NzU2OH0.L7bz8TZJEBVnNvY5wONfw0xwwRz-S9I_KJ1yyOd6mKU'
const supabase = createClient(supabaseUrl, supabaseKey)

type Store = {
  id: number;
  name: string;
  location: string;
};


export default function Page() {
  const [stores, setStores] = useState<Store[]>([]);
  const [newStoreName, setNewStoreName] = useState('');
  const [newStoreLocation, setNewStoreLocation] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State variable for dialog open/closed

  const fetchStores = async () => {
    const { data, error } = await supabase
      .from('stores')
      .select('*');

    if (error) {
      console.error('Error fetching stores:', error);
    } else {
      setStores(data || []);
    }
  };

  const handleAddStore = async () => {
    const { data, error } = await supabase
      .from('stores')
      .insert([
        { name: newStoreName, location: newStoreLocation }
      ]);

    if (error) {
      console.error('Error adding new store:', error);
    } else {
      setNewStoreName('');
      setNewStoreLocation('');
      setIsDialogOpen(false); // Close the dialog

      if (Array.isArray(data)) {
        // Update the stores state with the new store
        setStores(prevStores => [...prevStores, ...data]);
        // Fetch the latest stores list to refresh the table
        fetchStores();
      } else {
        console.error('Data from Supabase is not an array:', data);
      }
    }
  };

  const handleRemoveStore = async (storeId: number) => {
    const { data, error } = await supabase
      .from('stores')
      .delete()
      .eq('id', storeId);
  
    if (error) {
      console.error('Error removing store:', error);
    } else {
      // Update the stores state after removing the store
      setStores(prevStores => prevStores.filter(store => store.id !== storeId));
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);
  
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

      <div className="flex justify-between py-12 px-8">
        <h1 className="text-4xl font-semibold">Stores</h1>

<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Add new</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add store</DialogTitle>
            <DialogDescription>
              Use this to setup a new store. Each new one will generate an unique radio URL station.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Store name
              </Label>
              <Input
                id="name"
                value={newStoreName}
                onChange={(e) => setNewStoreName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                value={newStoreLocation}
                onChange={(e) => setNewStoreLocation(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleAddStore}>Save store</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      </div>


      <div className="flex justify-center p-8 w-full">
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Location</TableHead>
      <TableHead className="text-right"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {stores.map((store) => (
      <TableRow key={store.id}>
        <TableCell className="font-medium">{store.id}</TableCell>
        <TableCell className="font-medium">{store.name}</TableCell>
        <TableCell>{store.location}</TableCell>
        <TableCell className="text-right gap-4">
        <Link href={`/store-detail/${store.id}`} passHref>
  <Button variant="secondary" style={{textDecoration: 'none'}}>Details</Button>
</Link>
          <Button variant="destructive" className="ms-3" onClick={() => handleRemoveStore(store.id)}>Remove</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

        
      </div>
    </div>
  );
}
