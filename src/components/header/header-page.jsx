import Image from "next/image";
import Link from "next/link";

export const HeaderPage = () => (
    <header>
    <div>
      <div className="topNav">
        <Image
          alt="logo"
          src={"/images/logo_black.png"}
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                <h3> Home</h3>
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                <h3> Events</h3>
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                <h3> About us</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">Eventos pelo mundo</p>
    </div>
  </header>
)