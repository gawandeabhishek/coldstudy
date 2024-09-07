"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(true);
  return (
    <nav>
      <ul className="py-2 flex justify-between">
        <li onClick={() => setTheme(!theme)}>
          <Button className="rounded-full">{theme ? <Moon /> : <Sun />}</Button>
        </li>
        <li>
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
