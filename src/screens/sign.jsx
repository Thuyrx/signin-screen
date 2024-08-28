import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import rentalImg from '../assets/rental.svg';
import driverImg from '../assets/driver.svg';

export function Signin() {
    return (
        <main className="h-screen flex w-full">
            <div className="bg-primary-foreground w-full h-full flex p-16 items-center justify-center">
                <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex aspect-square bg-background rounded p-8">
                                <img src={rentalImg} alt="Aluguel de Carro" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex aspect-square bg-background rounded p-8">
                                <img src={driverImg} alt="Motorista de Carro" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold tracking-tighter">
                            Entre com sua conta
                        </CardTitle>
                        <CardDescription>
                            Utilize seu e-mail e senha ou o GitHub para entrar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" placeholder="exemplo@email.com" type="email" />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="paswword">Senha</Label>
                            <Input id="password" placeholder="Sua senha secreta" type="password" />
                        </div>
                        <Button className="mt-6 w-full">Entrar</Button>
                        <div className="flex items-center gap-6 mt-4">
                            <Separator />
                            <span className="text-xs text-muted-foreground">OU</span>
                            <Separator />
                        </div>
                        <Button variant="outline" className="mt-4 w-full"><GitHubLogoIcon className="mr-2" /> Entrar com o GitHub</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e Política de Privacidade.</p>
                    </CardFooter>
                </Card>
            </section>
        </main>
    )
}