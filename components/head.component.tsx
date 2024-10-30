import Head from 'next/head';

export default function HeadPage(props: any) {
	const title = `${props.titlePage} | DevFest Lima 2023`;
	return (
		<Head>
			<title>{title}</title>
			<meta name='title' content='DevFest Lima 2023' />
			<meta
				name='description'
				content='El DevFest Lima 2023, es una conferencia para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.ico' />
			<meta
				name='keywords'
				content='gdg, gdsc, eventos, gdsc perú, gde, festival, google, programming, hackathon,android, chrome, polymer, developers, web, cloud, androiddev, iot, ai, blokchain, iot, firebase,angular,gestion,scrum,flutter,gdsc lead, google developer student club,peru, ica, arequipa, huancayo, lima,utp, unica, uni'
			/>
			<meta name='author' content='DevFest Lima' />
			<meta name='generator' content='NextJS' />
			<meta name='theme-color' content='#4285F4' />
			<link href='https://www.devfest.pe/' rel='publisher' />
			<link rel='canonical' href={'https://www.devfest.pe/' + props.namePage + '/'} />
			<meta charSet='UTF-8' />

			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://devfest.pe/' />
			<meta property='og:title' content='DevFest Lima 2023' />
			<meta
				property='og:description'
				content='El DevFest Lima 2023, es una conferencia para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.'
			/>
			<meta property='og:image' content='https://devfestlima.pe/bannerTag.jpg' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content='https://devfest.pe/' />
			<meta property='twitter:title' content='DevFest Lima 2023' />
			<meta
				property='twitter:description'
				content='El DevFest Lima 2023, es una conferencia para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.'
			/>
			<meta property='twitter:image' content='https://devfestlima.pe/bannerTag.jpg' />
		</Head>
	);
}
