import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 p-12 text-center">
      <p className="text-lg font-semibold text-foreground">{label} — Coming Soon</p>
      <p className="text-sm text-muted-foreground">
        We're working on it. Check back soon.
      </p>
    </div>
  );
}

function HotelsForm() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid gap-4 rounded-lg border border-border bg-card p-6 shadow-sm"
    >
      <div className="grid gap-2">
        <Label htmlFor="destination">Destination</Label>
        <Input id="destination" placeholder="Where are you going?" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label>Check-in</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-2">
          <Label>Check-out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor="rooms">Rooms</Label>
          <Input id="rooms" type="number" min={1} defaultValue={1} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="guests">Guests</Label>
          <Input id="guests" type="number" min={1} defaultValue={2} />
        </div>
        <div className="grid gap-2">
          <Label>Room type</Label>
          <Select defaultValue="standard">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="deluxe">Deluxe</SelectItem>
              <SelectItem value="suite">Suite</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto sm:justify-self-end"
      >
        Search Hotels
      </Button>
    </form>
  );
}

export function ServiceTabs() {
  return (
    <Tabs defaultValue="hotels" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="flights">✈️ Flights</TabsTrigger>
        <TabsTrigger value="cab">🚕 Cab</TabsTrigger>
        <TabsTrigger value="bike">🏍️ Bike</TabsTrigger>
        <TabsTrigger value="hotels">🏨 Hotels</TabsTrigger>
      </TabsList>
      <TabsContent value="flights" className="mt-6">
        <ComingSoon label="Flights" />
      </TabsContent>
      <TabsContent value="cab" className="mt-6">
        <ComingSoon label="Cab" />
      </TabsContent>
      <TabsContent value="bike" className="mt-6">
        <ComingSoon label="Bike" />
      </TabsContent>
      <TabsContent value="hotels" className="mt-6">
        <HotelsForm />
      </TabsContent>
    </Tabs>
  );
}
