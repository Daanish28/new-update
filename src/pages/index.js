import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Section, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="url(https://images.unsplash.com/photo-1534609146522-5d8de8a10058?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000)"
			color="--light"
			font="--base"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Daanish
					<br />
					devs
				</Text>
			</Box>
			<Stack>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px" />
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px" />
				</StackItem>
			</Stack>
			<StackItem
				width="25%"
				lg-width="50%"
				sm-width="100%"
				font="--lead"
				text-transform="uppercase"
				letter-spacing="1px"
			/>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			flex-direction="column"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			/>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--danishDevs"
				max-width="850px"
				hover-color="--light"
			>
				Hi!I am Daanish and i make apps and games
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593976024153-7b31b96d1685?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /auto repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Origami app
			</Text>
			<Text
				as="h1"
				font="--headline2"
				margin="50px 0 0 0"
				min-width="10px"
				min-height="10px"
				color="#ffffff"
			>
				Right Now the app is in progress but let me introduce i like making origami its my hobby and in this app u can make oriigami step-step really cool feature and when its out i will send you to the website
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1540427969750-1424f2fa0af8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /auto repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Zombie game
			</Text>
			<Text
				as="h1"
				font="--headline2"
				margin="50px 0 0 0"
				min-width="10px"
				min-height="10px"
				color="#ffffff"
			>
				This is my first game made this just that a game coding journey start's its only have good graphics
				<br />
				link:
				<Link href="#" filter="blur(0px)">
					https://drive.google.com/drive/folders/1y-ZfUPrx8bwoJ7Pqpnus1ZfSRMdQ-TUw?usp=shari
				</Link>
				ng
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});