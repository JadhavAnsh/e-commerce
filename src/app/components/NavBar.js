import { fetchNavigationMenu } from "@/services/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchNavigationMenu().then(setLinks);
  }, []);

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.internal_link ? `/${link.internal_link.url}` : link.external_url}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
