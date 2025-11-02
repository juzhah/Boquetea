import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Link,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Mountain } from "lucide-react";

export default function NavBar() {
  return (
    <NavigationMenu className="flex w-full justify-between h-[60px] items-center px-4 border-b border-border">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Mountain className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold text-foreground">Boquetea</span>
      </div>
      <NavigationMenuList className="flex ">
        <NavigationMenuItem>
          <Link
            href="#explorar"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#explorar"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Discover
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </NavigationMenu>
  );
}
