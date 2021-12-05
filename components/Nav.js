import Image from 'next/image';
import navStyles from '@styles/components/Nav.module.css';

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
            <h2 className={navStyles.home}>AtomHacks</h2>
        </nav>
    );
}

export default Nav;