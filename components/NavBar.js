import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/table">Table View</Link>
                </li>
                <li>
                    <Link href="/graph">Graph View</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
