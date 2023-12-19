import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='border-t'>
			<div className='flex flex-col gap-4 p-5 text-center flex-center wrapper flex-between sm:flex-row'>
				<Link
					href={'/'}
					className='text-3xl font-bold text-muted-foreground'
				>
					WEEVENT
				</Link>

				<p>2023 WEEVENT. All rights reserved.</p>
			</div>
		</footer>
	);
}
