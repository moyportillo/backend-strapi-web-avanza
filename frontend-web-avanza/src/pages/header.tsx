import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/public" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">F</span>
                    </div>
                    <span className="font-bold text-4xl">FinanceHub</span>
                </Link>

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
            </div>
        </header>
    )
}

export default Header;
