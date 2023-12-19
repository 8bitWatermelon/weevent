import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Home | WeEvent',
	description: 'Home route - WeEvent.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
