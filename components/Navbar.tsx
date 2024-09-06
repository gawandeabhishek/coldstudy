import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export default function Navbar() {
    return (
      <nav className="px-2">
        <ul className="p-2 flex justify-between">
          <li><Button className="rounded-full"><Moon /></Button></li>
          <li><Button>Login</Button></li>
        </ul>
        <div>
          
        </div>
      </nav>
    );
  }