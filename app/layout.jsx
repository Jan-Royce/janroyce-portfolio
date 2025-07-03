import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Jan Royce Maceren - Full-Stack Web Developer'
    },
    description: 'Portfolio site of Jan Royce Maceren, specializing in Laravel, WordPress, Shopify, and full-stack web development.',
    openGraph: {
        title: 'Jan Royce Maceren - Full-Stack Web Developer',
        description: 'Portfolio site of Jan Royce Maceren, specializing in Laravel, WordPress, Shopify, and full-stack web development.',
        url: 'https://janroyce.netlify.app/',
        siteName: 'Jan Royce Portfolio',
        images: [
            {
                url: 'https://janroyce.netlify.app/images/portfolio-image.png',
                width: 1200,
                height: 627,
                alt: 'Jan Royce Portfolio',
            },
        ],
        type: 'website',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
