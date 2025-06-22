'use client'

import React from 'react'
import { IconType } from 'react-icons'

interface ListingCategoryProps {
    icon: IconType
    label: string
    description: string
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
    icon: Icon,
    label,
    description
}) => {
  return (
    <div className='flex flex-col gap-4 sm:gap-6'>
        <div className="flex flex-row items-center gap-3 sm:gap-4">
            <Icon size={32} className='text-neutral-600 sm:w-[40px] sm:h-[40px]' />
            <div className="flex flex-col">
                <div className="text-base sm:text-lg font-semibold">
                    {label}
                </div>
                <div className="text-neutral-500 font-light text-sm sm:text-base">
                    {description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListingCategory