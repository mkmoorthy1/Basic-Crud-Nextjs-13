import Link from "next/link"



const Header = () => {

  const navItems = [
    { label: "HOME", url: "" },
    { label: "ABOUT", url: "about" },
    { label: "FAQ", url: "about/1" },
    { label: "BLOG", url: "blog" },
  ]


  return (
    <header className="bg-blue-500 top-0 left-0 w-full px-3 py-4">
      <nav>
        <ul className="flex justify-center gap-6">
          {
            navItems.map(navItem => (
              <li key={navItem.label}><Link className="text-xl text-white" href={`/${navItem.url}`}>{navItem.label}</Link></li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
