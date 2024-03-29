/** @format */

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Lukasz from '../../public/baner.jpeg';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lukasz Kołodziej',
	description: 'Komitet wyborczy Łukasz Kołodziej',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<header>
					<Image
						src={Lukasz}
						placeholder='blur'
						alt='Łukasz Kołodziej'
						className='w-full'
					/>
				</header>
				{children}
			</body>
		</html>
	);
}
