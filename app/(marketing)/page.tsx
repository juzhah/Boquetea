import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Search,
  Filter,
  Mountain,
  Camera,
  Utensils,
  TreePine,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Boquetea</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#explorar"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Explorar
            </Link>
            <Link
              href="#negocios"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Para Negocios
            </Link>
            {/* <Link
              href="#contacto"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link> */}
          </nav>

          {/* <Button className="bg-primary hover:bg-primary/90">Abrir Mapa</Button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-card to-background">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/beautiful-mountain-landscape-of-boquete-panama-wit.png')] bg-cover bg-center opacity-20"></div>
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/20 text-accent-foreground"
          >
            Descubre Boquete, Chiriquí
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Tu Aventura en la Naturaleza
            <span className="text-primary block">Comienza Aquí</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Explora los lugares más increíbles de Boquete con nuestro mapa
            interactivo. Desde senderos de montaña hasta cafeterías locales,
            encuentra tu próxima aventura.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="¿Qué quieres explorar en Boquete?"
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <MapPin className="h-5 w-5 mr-2" />
              Explorar Mapa Interactivo
            </Button>
            <Button size="lg" variant="outline">
              <Camera className="h-5 w-5 mr-2" />
              Ver Lugares Destacados
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="explorar" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explora por Categorías
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encuentra exactamente lo que buscas con nuestros filtros
              especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mountain,
                title: "Aventura",
                desc: "Senderos y actividades al aire libre",
                count: "25+",
              },
              {
                icon: Utensils,
                title: "Gastronomía",
                desc: "Restaurantes y cafeterías locales",
                count: "40+",
              },
              {
                icon: TreePine,
                title: "Naturaleza",
                desc: "Parques y reservas naturales",
                count: "15+",
              },
              {
                icon: Camera,
                title: "Turismo",
                desc: "Hoteles y sitios de interés",
                count: "30+",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardHeader className="text-center">
                  <category.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.desc}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent-foreground"
                  >
                    {category.count} lugares
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Lugares Destacados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los destinos más populares según nuestros usuarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Volcán Barú",
                type: "Aventura",
                rating: 4.8,
                image:
                  "volcanic%20peak%20of%20Baru%20volcano%20in%20Panama%20with%20hiking%20trail",
                description:
                  "El punto más alto de Panamá con vistas espectaculares",
              },
              {
                name: "Sendero Los Quetzales",
                type: "Naturaleza",
                rating: 4.9,
                image:
                  "lush%20cloud%20forest%20trail%20in%20Panama%20with%20tropical%20birds",
                description:
                  "Caminata por el bosque nuboso con avistamiento de aves",
              },
              {
                name: "Café Ruiz",
                type: "Gastronomía",
                rating: 4.7,
                image:
                  "traditional%20coffee%20plantation%20in%20Boquete%20Panama%20with%20coffee%20beans",
                description: "Tour por plantación de café con degustación",
              },
            ].map((place, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-[url('/--place-image-.png')] bg-cover bg-center"></div>
                  <Badge className="absolute top-4 left-4 bg-accent/90 text-accent-foreground">
                    {place.type}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{place.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground ml-1">
                        {place.rating}
                      </span>
                    </div>
                  </div>
                  <CardDescription>{place.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver en Mapa
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="negocios" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Tienes un Negocio en Boquete?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Únete a nuestra plataforma y conecta con miles de turistas que
              visitan Boquete cada año
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Aumenta tu Visibilidad
                    </h3>
                    <p className="text-muted-foreground">
                      Aparece en búsquedas relevantes y llega a más clientes
                      potenciales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Ubicación Privilegiada
                    </h3>
                    <p className="text-muted-foreground">
                      Tu negocio destacado en nuestro mapa interactivo
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Reseñas y Calificaciones
                    </h3>
                    <p className="text-muted-foreground">
                      Sistema de reseñas para construir confianza con tus
                      clientes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Planes de Membresía</CardTitle>
                <CardDescription>
                  Elige el plan que mejor se adapte a tu negocio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-foreground mb-2">
                      Básico
                    </h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      $25/mes
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        Perfil básico
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        Ubicación en mapa
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />5
                        fotos
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-primary rounded-lg p-4 text-center relative">
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Recomendado
                    </Badge>
                    <h4 className="font-semibold text-foreground mb-2">
                      Premium
                    </h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      $45/mes
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        Todo lo básico
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        Fotos ilimitadas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        Destacado en búsquedas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        Analytics
                      </li>
                    </ul>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Ver Planes Completos
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Después de seleccionar tu plan, podrás contactar con nuestro
                  equipo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Listo para Unirte?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Contacta con nuestro equipo para agregar tu negocio a Boquetea
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    Contacto Directo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-semibold">+507 6XXX-XXXX</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">negocios@boquetea.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Horario de Atención
                    </p>
                    <p className="font-semibold">
                      Lun - Vie: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    Formulario de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Nombre de tu negocio" />
                  <Input placeholder="Tu email" type="email" />
                  <Input placeholder="Teléfono" />
                  <textarea
                    className="w-full p-3 border border-border rounded-md resize-none"
                    rows={3}
                    placeholder="Cuéntanos sobre tu negocio..."
                  ></textarea>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Enviar Solicitud
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">Boquetea</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Tu guía completa para descubrir los mejores lugares de Boquete,
                Chiriquí.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Explorar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Mapa Interactivo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Lugares Destacados
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Categorías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Negocios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Planes y Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Registrar Negocio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>negocios@boquetea.com</li>
                <li>+507 6XXX-XXXX</li>
                <li>Boquete, Chiriquí, Panamá</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Boquetea. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
