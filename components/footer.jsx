import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                Get in touch through
                <Link
                    href="https://www.linkedin.com/in/jan-royce-maceren-151692170/"
                    className="decoration-dashed text-primary underline-offset-8 pl-1"
                >
                    LinkedIn
                </Link>!
            </p>
        </footer>
    );
}
