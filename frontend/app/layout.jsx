import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { SocketProvider } from "@/context/SocketContext";


export const metadata = {
  title: "Chat App",
  description: "A simple chat application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <AppProvider>
        <SocketProvider>
          {children}
          </SocketProvider>
          </AppProvider>
          </body>
    </html>
  );
}
