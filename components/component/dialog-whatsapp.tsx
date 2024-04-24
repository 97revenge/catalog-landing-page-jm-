"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { WhatsAppIconSmall } from "../Icons/WhatsAppIcon";

import { whatsAppSchema } from "@/types/whatsApp";

import { useForm } from "react-hook-form";
import { z } from "zod";

export function DialogWhatsapp({ ...props }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="transition-auto w-32 m-2 bg-transparent hover:bg-transparent hover:animate-bounce">
          <WhatsAppIconSmall style={"w-32 text-sm"} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enviar no WhatsApp </DialogTitle>
          <DialogDescription>
            Compartilhe este produto no WhatsApp ou salve ele em suas comversas
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-center" {...props}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
