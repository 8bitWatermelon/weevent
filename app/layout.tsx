import '@/styles/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'WeEvent',
	description: 'Find the hottest events around you, learn and experience.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					showOptionalFields: false,
					socialButtonsPlacement: 'bottom',
				},
			}}
		>
			<html
				lang='en'
				suppressHydrationWarning
			>
				<body className={cn('relative antialiased', poppins.variable)}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
