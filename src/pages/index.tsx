import { LinkObject } from "@/models/nav.model"
import Link from "next/link"

// do I overkill this and add the thing
const navLinks: Array<LinkObject> = [
  { href: '/', label: 'Home' },
  { href: '/addgroup', label: 'Add' },
  { href: '/editgroup', label: 'Edit' },
]

function renderLink (linkObjects: Array<LinkObject>) {
  return linkObjects.map(e => (
    <li><Link href={e.href}>{ e.label }</Link></li>
  ));
}

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold underline">Hello tailwind</h1>

        <ul>
          <label>Link group</label>
            {renderLink(navLinks)} 
        </ul>
      </main>
    </>
  )
}
