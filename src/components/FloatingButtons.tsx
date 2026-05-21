import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      <a
        href="https://wa.me/+77075212161"
        target="_blank"
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle />
      </a>

      <a
        href="tel:+77075212161"
        className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <Phone />
      </a>

    </div>
  );
}