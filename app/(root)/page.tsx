import { UserButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<main className='flex-1'>
			<h1>WeEvent.com</h1>
			<UserButton afterSignOutUrl='/' />
		</main>
	);
}
