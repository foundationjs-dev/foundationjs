import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "{{PROJECT_NAME}}",
	description: "Built with Setcamp",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
