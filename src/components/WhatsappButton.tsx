export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+77075212161"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition p-5 rounded-full shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.42 0 .06 5.36.06 11.98c0 2.12.56 4.2 1.62 6.03L0 24l6.16-1.62a11.9 11.9 0 0 0 5.88 1.5h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.24-6.2-3.5-8.42z" />
      </svg>
    </a>
  );
}