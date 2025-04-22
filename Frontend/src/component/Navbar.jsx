import React from 'react'
import { SquarePlus, SunMoon } from 'lucide-react';
export default function Navbar() {
  return (
        <header class="container font-lg text-white flex justify-between" >
            <h1>Product Store</h1>
            <div class="flex gap-2">
                <SquarePlus />
                <SunMoon />
            </div>
  
        </header>
    
  )
}
