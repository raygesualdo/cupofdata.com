import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H5 } from '../components/Typography'
import Link from 'gatsby-link'

const Iframe = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: none;
`
const GotoHome = H5.extend`
	position: absolute;
	left: 85%;
	top: 20px;
	color: #ffffff;
	transform: translateX(-50%);
`
const Onboarding = () => (
	<div>
		<Iframe width="100%" height="100%" frameborder="0" src={`${process.env.GATSBY_ONBOARD_URL}`}></Iframe>
		<Link to='/'><GotoHome>Home</GotoHome></Link>
	</div>
)
export default Onboarding
