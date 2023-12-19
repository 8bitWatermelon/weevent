'use client';

import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItems() {
	const pathname = usePathname();
	return (
		<div className='flex flex-col items-start w-full gap-5 md:flex-between md:flex-row'>
			{navLinks.map((link) => {
				const isActive = pathname === link.href;

				return (
					<Link
						href={link.href}
						key={link.href}
						className={cn(
							'px-4 py-2 md:py-0 inline-flex items-center md:px-0 hover:text-accent-foreground rounded-md p-medium-16 whitespace-nowrap hover:bg-accent w-full',
							isActive && 'text-primary-500 hover:text-primary-500/80'
						)}
					>
						<span className='block md:hidden'>
							{<link.icon className='w-4 h-4 mr-2' />}
						</span>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
