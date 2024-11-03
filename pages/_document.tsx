import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

export default function Document() {
	const { basePath } = useRouter();

	return (
		<Html lang='es'>
			<Head>
				{/* Ruta del favicon con basePath */}
				<link rel="icon" href={`${basePath}/favicon.ico`} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
