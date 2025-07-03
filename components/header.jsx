import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedInLogo from 'public/images/linkedin.svg';
import profilePhoto from 'public/images/profile-photo.png'

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-18">
            <div className="flex">
                <Image src={profilePhoto} alt="Jan Royce Maceren" className="w-16 rounded-full" />
                <div className="self-center pl-4">
                    <span className="font-semibold">Jan Royce Maceren</span>
                    <br/>
                    <span className="text-sm text-neutral-300">Full-Stack Web Developer</span>
                </div>
            </div>
            <Link
                href="https://www.linkedin.com/in/jan-royce-maceren-151692170/"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:inline-flex ml-auto"
            >
                <Image src={linkedInLogo} alt="LinkedIn logo" className="w-7" />
            </Link>
            <Link
                href="https://github.com/Jan-Royce"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:inline-flex"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
