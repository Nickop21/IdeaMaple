import { Loader, Loader2, Loader2Icon, LoaderPinwheel, LucideLoader2 } from 'lucide-react'
import React from 'react'

function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center font-extrabold text-3xl animate-pulse '>
<LucideLoader2/>
    </div>
  )
}

export default Loading
