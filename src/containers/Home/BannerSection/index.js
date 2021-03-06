import React, { div } from 'react'
import { Container, Row, Col } from '../../../components/Layout'
import { H3, H6, P } from '../../../components/Typography'
import styled, { css } from 'styled-components'
import Slider from 'react-slick'
import Button from '../../../components/Button'
import Link, { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
	background-image: url(/files/images/background.svg);
  background-size: cover;
  color: ${props => props.theme.banner.color.text};
  position: relative;
  background-position: left top;
  margin-top: 90px;
  height: 700px;
  @media screen and (max-width: 767px) {
  	height: 750px
  }
  @media screen and (max-width: 576px) {
  	background-image: url(/files/images/mobile-background.svg);
  	margin-top: 70px;
  	height: 680px
  }
`

const BannerView = styled.div`
	position: relative;
  padding-top: 130px;
  padding-bottom: 230px;
`

const Header = H3.extend`
	font-family: GTWalsheim;
	@media screen and (max-width: 576px) {
		font-size: 24px;
		line-height: 28px;
	}
`
const Title = H6.extend`
	color: #000000;
	font-weight: 400;
	max-width: 560px;
	margin-bottom: 26px;
`
const BannerContainer = Container.extend`
	padding-top: 144px;
	height: 100%;
	position: relative;
`

const BackImg = styled.img`
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 140px;
`
const PersonaContainer = styled.div`
	position: absolute;
	bottom: -7px;
	right: 0;
	display: flex;
	width: 570px;
	justify-content: space-between;
	@media screen and (max-width: 576px) {
		width: fit-content;
		left: 50%;
		transform: translateX(-50%);
	}
`
const Personal = styled.div`
	position: relative;
	display: flex;
	flex: 1;
	padding-top: 100px;
	@media screen and (max-width: 400px) {
		img {
			height: 200px;
		}
	}
`
const PersonaBox = styled.div`
	position: absolute;
	padding: 0 10px;
	
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	min-width: 60px;
	background: #f5f7fa;
	:after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: calc(50% - 6px);
		width: 0;
	  height: 0; 
	  border-left: 6px solid transparent;
	  border-right: 6px solid transparent;
	  border-top: 6px solid #f5f7fa;
	}
	@media screen and (max-width: 576px) {
		min-width: 40px;
	}
`
const PersonaBox1 = PersonaBox.extend`
	top: 0;
	left: 0;
	@media screen and (max-width: 576px) {
		top: 40px;
	}
`
const PersonaBox2 = PersonaBox.extend`
	background: #4659ef;
	top: 0;
	left: -30px;
	:after {
	  border-top: 6px solid #4659ef;
	}
	@media screen and (max-width: 576px) {
		top: 20px;
		left: -20px;
	}
`
const PersonaBox3 = PersonaBox.extend`
	top: 40px;
	left: -20px;
	@media screen and (max-width: 576px) {
		min-width: 25px;
		top: 55px;
		left: 10px;
	}
`
const PersonaBox4 = PersonaBox.extend`
	top: 70px;
	left: 70px;
	@media screen and (max-width: 576px) {
		top: 35px;
		left: 20px;
	}
`
const PersonInfo = styled.div`
	border-bottom: 1px solid rgba(0,0,0,0.1);
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`
const PersonNameText= styled.small`
	font-size: 8px;
	line-height: 11px;
	color: #fff;
	font-family: Avenir;
	font-weight: 500;
`
const PersonRoleText= styled.small`
	font-size: 7px;
	line-height: 10px;
	color: rgba(255, 255, 255, 0.4);
	font-family: Avenir;
	font-weight: 400;
`
const BlankView = styled.div`
	width: ${props=>`${props.width}px`};
	background: rgba(0, 0, 0, 0.1);
	height: 1px;
	margin-bottom: 1rem;
	${props => props.marginTop && css`
		margin-top: 1rem;
		margin-bottom: 10px;
		@media screen and (max-width: 576px) {
			width: ${props=> `${props.width/2}px`};
			margin-top: 10px;
		}
	`}
	@media screen and (max-width: 576px) {
		width: ${props=> `${props.width/2}px`};
		margin-bottom: 10px;
	}
`
const ScoreName = styled.small`
	font-size: 6px;
	font-family: 8px;
	font-weight: 500;
	font-family: Avenir;
	padding-top: 7px;
	color: ${props => props.active ? '#fff': 'rgba(0,0,0,0.1)'};
`
const ScoreText = P.extend`
	color: ${props => props.active ? '#fff': 'rgba(0,0,0,0.1)'};
	@media screen and (max-width: 576px) {
		font-size: 10px;
		line-height: 14px;
	}
`
const MarginImage = styled.img`
	margin-right: -10px;
	@media screen and (max-width: 576px) {
		margin-right: -30px;
	}
`
const RowView = styled.div`
	display: flex;
`
class BannerSection extends React.PureComponent {
	constructor() {
		super()

		this.state = {
			score1: 0,
			score2: 0,
			score3: 0
		}
	}
	componentDidMount() {
		let interval1 = setInterval(() => {
			this.setState({
				score1: this.state.score1 + 1
			})
			if( this.state.score1 == 48 )
				clearInterval(interval1)
		}, 20)
		let interval2 = setInterval(() => {
			this.setState({
				score2: this.state.score2 + 1
			})
			if( this.state.score2 == 95 )
				clearInterval(interval2)
		}, 20)
		let interval3 = setInterval(() => {
			this.setState({
				score3: this.state.score3 + 1
			})
			if( this.state.score3 == 23 )
				clearInterval(interval3)
		}, 20)
	}
	render() {
		return (
			<Wrapper>
				<BannerContainer>
					<Header>
						With Cup of Data, you get better leads
					</Header>
					<Title>
						Quickly identify and optimize inbound and outbound channels to improve conversion velocity
					</Title>
					<Link to="/onboard"><Button>Get started</Button></Link>
					<PersonaContainer>
						<Personal>
							<PersonaBox1>
								<PersonInfo>
									<BlankView width={60}/>
								</PersonInfo>
								<div>
									<ScoreName>Score</ScoreName>
									<ScoreText>{this.state.score1}</ScoreText>
								</div>						
							</PersonaBox1>
							<img src={withPrefix('/files/images/img-person1.svg')} />
						</Personal>
						<Personal>
							<PersonaBox2>
								<PersonInfo>
									<PersonNameText>Miranda keith</PersonNameText>
									<PersonRoleText>Front end developer</PersonRoleText>
								</PersonInfo>
								<div>
									<ScoreName active >Score</ScoreName>
									<ScoreText active >{this.state.score2}</ScoreText>
								</div>
							</PersonaBox2>
							<img src={withPrefix('/files/images/img-person2.svg')} />
						</Personal>
						<RowView>
							<Personal>
								<PersonaBox3>
									<div>
										<ScoreName>Score</ScoreName>
										<ScoreText>{this.state.score3}</ScoreText>
									</div>
								</PersonaBox3>
								<MarginImage src={withPrefix('/files/images/img-person3.svg')} />
							</Personal>
							<Personal>
								<PersonaBox4>
									<PersonInfo>
										<BlankView width={60}/>
									</PersonInfo>
									<BlankView width={60} marginTop/>
								</PersonaBox4>
								<img src={withPrefix('/files/images/img-person4.svg')} />
							</Personal>
						</RowView>
					</PersonaContainer>
				</BannerContainer>
			</Wrapper>
		)
	}
}

export default BannerSection
