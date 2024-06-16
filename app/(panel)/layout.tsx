import Sidebar from "@/components/commons/Sidebar";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <main>
            {children}
            <Sidebar/>
        </main>
        </body>
        </html>
    )
}