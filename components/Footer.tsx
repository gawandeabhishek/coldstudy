import Link from "next/link";

const data = [
  {
    title: "Privacy & Policy",
    href: 'privacy-policy'
  },
  {
    title: "Contact: mail.com",
    href: 'contact'
  },
  {
    title: "Help",
    href: 'help'
  }
];
export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-2 px-4 bg-black">
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 grid-rows-2">
        {data.map((info, key) => (
          <li key={key}><Link href={`/${info.href}`}>{info.title}</Link></li>
        ))}
      </ul>
    </footer>
  );
}
