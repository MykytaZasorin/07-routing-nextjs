import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { TanStackProvider } from "@/components/TanStackProvider/TanStackProvider";
import styles from "./globals.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles["app-container"]}>
        <TanStackProvider>
          <Header />
          <main className={styles["main-content"]}>{children}</main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
