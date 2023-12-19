import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './nav-items';
import NavMobile from './nav-mobile';

export default function Header() {
	return (
		<header className='w-full border-b'>
			<div className='flex items-center justify-between wrapper'>
				<Link
					href={'/'}
					className='text-3xl font-bold text-muted-foreground'
				>
					WEEVENT
				</Link>

				<div className='flex justify-end gap-3'>
					<SignedIn>
						<div className='flex items-center gap-x-4'>
							<nav className='hidden w-full max-w-xs md:flex-between'>
								<NavItems />
							</nav>
							<UserButton afterSignOutUrl='/' />
							<NavMobile />
						</div>
					</SignedIn>

					<SignedOut>
						<Button
							role='sign-in-button'
							type='button'
							asChild
						>
							<Link href={'/sign-in'}>Sign in</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
}
