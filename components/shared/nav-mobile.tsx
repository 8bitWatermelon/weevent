import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavItems from './nav-items';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export default function NavMobile() {
	return (
		<Sheet>
			<SheetTrigger
				className='block md:hidden'
				asChild
			>
				<Button
					role='mobile-menu'
					type='button'
					variant={'outline'}
					size={'icon'}
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className='w-[300px] sm:w-[540px] gap-6 flex flex-col'>
				<Link
					href={'/'}
					className='mt-6 text-3xl font-bold'
				>
					WeEvent
				</Link>

				<Separator orientation='horizontal' />

				<NavItems />
			</SheetContent>
		</Sheet>
	);
}
