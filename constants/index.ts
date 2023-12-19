import { Home, PlusCircle, User } from 'lucide-react';

export const navLinks = [
	{
		name: 'Home',
		href: '/',
		icon: Home,
	},
	{
		name: 'Create Event',
		href: '/events/create',
		icon: PlusCircle,
	},
	{
		name: 'Profile',
		href: '/profile',
		icon: User,
	},
];
