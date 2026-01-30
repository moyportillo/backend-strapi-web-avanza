import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import logo64 from "@/assets/img/logo.png"

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">

                {/* Logo */}
                <Link to="/public" className="flex items-center space-x-2">
                    <img
                        src={logo64}
                        className="h-10 w-auto"
                        alt="Logo Iglesia Bautista Hebrón"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/bienes-raices" className="text-foreground/80 hover:text-foreground transition-colors">
                        Bienes Raíces
                    </Link>
                    <Link to="/prestamos" className="text-foreground/80 hover:text-foreground transition-colors">
                        Préstamos
                    </Link>
                    <Button variant="outline" size="sm">
                        Contacto
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t bg-background">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link
                            to="/bienes-raices"
                            onClick={() => setOpen(false)}
                            className="text-foreground/80 hover:text-foreground"
                        >
                            Bienes Raíces
                        </Link>

                        <Link
                            to="/prestamos"
                            onClick={() => setOpen(false)}
                            className="text-foreground/80 hover:text-foreground"
                        >
                            Préstamos
                        </Link>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setOpen(false)}
                        >
                            Contacto
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
