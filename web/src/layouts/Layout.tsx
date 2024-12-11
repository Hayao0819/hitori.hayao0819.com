import type { PropsWithChildren } from "react";
import "@/styles/global.css";
import { Header } from "@/components/Header";

export default function PageLayout({
    children,
    title,
}: PropsWithChildren<{ title: string }>) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{title}</title>
            </head>
            <body>
                <Header />
                <article>{children}</article>
            </body>
        </html>
    );
}
