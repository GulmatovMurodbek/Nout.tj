"use client";
import { Provider } from "react-redux";
import "./styles/globals.css";
import { store } from "../entities/store/store";
import '../../i18n'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        {children}
        </Provider>
        </body>
    </html>
  );
}
