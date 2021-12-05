import Image from 'next/image';
import navStyles from '@styles/components/Nav.module.css';
import Link from 'next/link';

const routes = [
    { name: 'Home', href: '/#home', current: false },
    { name: 'About', href: '/#about', current: false },
    { name: 'Sponsors', href: '/#sponsors', current: false },
    { name: 'Schedule', href: '/#schedule', current: false },
    { name: 'Team', href: '/#team', current: false },
    { name: 'FAQ', href: '/#faq', current: false },
]

const Nav = () => {
    return (
        <nav className={navStyles.navbar}>
            <Image 
                src="/images/logo.png" 
                alt="atomhacks logo"
                height={50}
                width={50}
            >
            </Image>
            <h2 className={navStyles.navItem}>AtomHacks</h2>
            <div className={navStyles.right}>
                {routes.map((route, i) => (
                    <Link
                        href={route.href}
                        key={i}
                        passHref
                    >
                        <h2 className={navStyles.navItem}>{route.name}</h2>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Nav;