import { Heart, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function CarCard() {
  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="2023 Tesla Model 3"
            className="w-full h-[200px] object-cover"
          />

          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 text-white hover:text-white hover:bg-white/20"
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">2023 Tesla Model 3</h2>
        <p className="text-sm text-gray-600 mb-1">Rear-Wheel Drive</p>
        <p className="text-sm text-gray-600 mb-4">34,310 mi</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold">$26,968</span>
          <Button size="icon" variant="ghost" className="text-gray-400">
            <Info className="h-5 w-5" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            Call
          </Button>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
            Check availability
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <img
          src="/placeholder.svg?height=30&width=60"
          alt="Hertz logo"
          className="h-8"
        />
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          Inglewood, CA
        </div>
      </CardFooter>
    </Card>
  );
}
