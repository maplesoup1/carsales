"use client";
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const Hero = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <div>
            Post: {id}
        </div>
    );
};

export default Hero;
