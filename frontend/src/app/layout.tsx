import "@/styles/globals.css";
import "@/styles/variable.css";
import {Poppins} from 'next/font/google';
import {Metadata} from "next";

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--poppins'
})

export const metadata: Metadata = {
    title: 'Oscar PALISSOT | Portfolio data engineer',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
        <body>
        {children}
        </body>
        </html>
    );
}
