import React from 'react'
import Container from '@material-ui/core/Container'
import htmlSvg from 'assets/svg/html.svg'
import nodeSvg from 'assets/svg/node.svg'
import cssSvg from 'assets/svg/css.svg'
import jsSvg from 'assets/svg/js.svg'
import ferryt from 'assets/svg/ferryt.svg'
import reactSvg from 'assets/svg/react.svg'
import unity from 'assets/svg/unity.svg'
import mongoSvg from 'assets/svg/mongodb.svg'
import { Header2 } from 'styles/style'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Container maxWidth="lg">
      <Header2>Technologia</Header2>
      <ul>
      <List>
          <Img src={unity} alt="unity" />
        </List>
        <List>
          <Img src={htmlSvg} alt="htmlimg" />
        </List>
        <List>
          <Img src={cssSvg} alt="cssimg" />
        </List>
        <List>
          <Img src={jsSvg} alt="jsimg" />
        </List>

        <List>
          <Img src={reactSvg} alt="reactimg" />
        </List>
        <List>
          <Img src={nodeSvg} alt="nodejsimg" />
        </List>
        <List>
          <Img src={ferryt} alt="ferryt" title="FerytFlow"/>
        </List>
        <List>
          <Img src={mongoSvg} alt="mongodbimg" />
        </List>
      </ul>
    </Container>
  )
}

const List = styled.li`
  margin: 50px;
  display: inline-block;
  width: 15%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin: 5.3vw;
    width: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }
`
const Img = styled.img`
  width: 60%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 100%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 50%;
  }
`

export default Skills
