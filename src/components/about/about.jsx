import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle'
import { InlineIcon } from '@iconify/react'
import discordIcon from '@iconify/icons-mdi/discord'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import studio from 'assets/images/studio.webp'
import styled from 'styled-components'
import { Header2 } from 'styles/style'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '10vh'
  },
  iconSiz: {
    fontSize: 25,
    verticalAlign: 'middle',
    marginRight: '6px'
  },
  iconSiz1: {
    fontSize: 40,
    verticalAlign: 'middle',
    marginRight: '6px'
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Div>
              <Header>O mnie</Header>
              <MiniTitle>Cześć, mam na imię Kamil Bandzwołek</MiniTitle>
              <br />
              <Parag>Jestem analitykiem systemowym z 6 letnim doświadczeniem.</Parag>
              <Parag>
                    Pracuje w firmie na platformie Work-flow na której tworze rozwiązania
                    dla Banków. Moja praca uwzględnia pełną ścieżkę wytwarzania oprogramowania. 
                    Dokonuje analizy rozwiązania, zbieram wymagania, wytwarzam na platformie Ferryt, następnie 
                    testuje, wdrażam i szkole z rozwiązania. Jestem również liderem zespołu składającego się z 5 analityków.
                    Całość daje mi pełny widok na proces wytwarzania oprogramowania.
              </Parag>
              <br />
              <Parag>
              Czuje się osobą, która nie waha się podjąć nowych wyzwań. Podejmowałem się różnych zadań od tworzenia gier
              na silniku Unity3d i udział w gamejamie po prowadzenie SM dla wypożyczalni aut sportowych. W podejmowanych działaniach kieruje
              się poszukiwaniem najciekawszych rozwiązań.
              </Parag>
              <br />
              <Parag>
                Od maja 2022 zainteresowałem się światem Web3. Zakupiłem wtedy swoje pierwsze ETH i stworzyłem aplikacje, 
                w której codziennie zapisywałem nowe informacje, prowadziłem peirwsze analizy, rozwijałem słownik pojęć. 
                Z czasem aplikacja przypominała dziennik z podróży do świata Web3.

              </Parag>
              <br />
              <Parag>
                Kolejnym krokiem było dołączenie do społeczności. Nowe kontakty, codzienne rozmowy, tylko utwierdziły mnie w 
                przekonaniu że chciałbym nie tylko tu być ale także tworzyć nowy internet web3.
              </Parag>
              <br />
              <br />
              <MiniTitle1>
                Jeżeli wydaje Ci się, że mógłbym się przydać skontaktuj się :
              </MiniTitle1>
              <br />
              <ul>
                <List>
                  <EmailIcon className={classes.iconSiz} />
                  kamil.bandzwolek@gmail.com
                </List>
                <List>
                  <PhoneIcon className={classes.iconSiz} />
                  +48 794-313-938
                </List>
                <List>
                  <PersonPinCircleIcon className={classes.iconSiz} />
                  Poznań | Polska, Europa
                </List>
              </ul>
              <br />
              <br />
            </Div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img
              src={studio}
              alt="Studio NFT Polska"
              title="Studio NFT Polska Collective.-FunArt"
            />
          </Grid>
          <Grid item xs={12}>
            <div>
              <MiniTitle2>Bądźmy w kontakcie :</MiniTitle2>
              <br />
              <ul>
                <List1>
                  <a
                    href="https://www.facebook.com/k.wolku"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className={classes.iconSiz1} />
                    Facebook
                  </a>
                </List1>
                <List1>
                  <a
                    href="https://twitter.com/MgrGracz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className={classes.iconSiz1} />
                    Twitter
                  </a>
                </List1>
                <List1>
                  <a
                    href="https://www.instagram.com/grandpafejm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className={classes.iconSiz1} />
                    Instagram
                  </a>
                </List1>
                <List1>
                  <InlineIcon
                    icon={discordIcon}
                    style={{
                      fontSize:
                        'calc(33px + (40 - 33) * ((100vw - 300px) / (1600 - 300)))',
                      verticalAlign: 'middle',
                      marginRight: '6px'
                    }}
                  />
                  <span>MgrGracz#8811</span>
                </List1>
                <List1>
                  <a
                    href="https://www.linkedin.com/in/mgrgracz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className={classes.iconSiz1} />
                    LinkedIn
                  </a>
                </List1>
                <List1>
                  <a
                    href="https://www.youtube.com/user/UCf8LDq2dnuqZGYz0TNxpngQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeIcon className={classes.iconSiz1} />
                    Youtube
                  </a>
                </List1>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

const Parag = styled.p`
  font-size: 17px;
  text-align: justify;
  text-justify: inter-word;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 15px;
  }
`
const List = styled.li`
  padding: 5px;
  margin: 10px;
  
  color: rgb(30, 51, 51);
  font-size: 18px;
  display: inline-block;
  & :hover,
  :hover,
  a :hover {
    color: rgb(31, 201, 201);
  }
  a {
    text-decoration: none;
    color: rgb(30, 51, 51);
  }

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: auto;
    font-family: 'Montserrat', sans-serif;
    margin-right: auto;
    font-size: 12px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: auto;
    font-family: 'Montserrat', sans-serif;
    margin-right: auto;
    font-size: 13px;
  }
`
const List1 = styled(List)`
  margin-right: 10px;
  margin-left: 12rem;
  padding: 20px;
  font-size: 27px;
  width: 20%;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 2.5rem;
    margin-right: auto;
    width: 38%;
    padding: 0;
    font-size: 12px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 3rem;
    margin-right: auto;
    font-size: 14px;
    width: 38%;
    padding: 2px;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin-left: 7rem;
    margin-right: auto;
    width: 33%;
    padding: 5px;
  }
`

const MiniTitle = styled.h2`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-family: 'Montserrat', sans-serif;
  }
`
const MiniTitle1 = styled.h3`
  text-align: left;
  font-size: 18px;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 14px;
    text-align: center;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 16px;
    text-align: center;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`
const MiniTitle2 = styled(MiniTitle1)`
  font-size: 28px;
  color: #444444;
  border: none;
  border-bottom: 2px solid;
  border-radius: 130px 50px/4px 2px;
  padding: 10px;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 18px;
  }
`
const Div = styled.div`
  margin-left: 4%;
  font-family: 'Montserrat', sans-serif;
  margin-right: 2%;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-top: 2vh;
    margin-left: 0;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-top: 2vh;
    margin-left: 0;
  }
`
const Header = styled(Header2)`
  margin-bottom: 2rem;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    margin-left: 0;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    text-align: center;
    font-size: 30px;
    margin-left: 0;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`
const Img = styled.img`
  width: 80%;
  height: auto;
  margin-top: calc(150px + (119 - 150) * ((100vw - 300px) / (1600 - 300)));
  margin-left: calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300)));
  -webkit-box-shadow: 10px 14px 51px -13px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 10px 14px 51px -13px rgba(0, 0, 0, 0.58);
  box-shadow: 10px 14px 51px -13px rgba(0, 0, 0, 0.58);
  :hover {
    -webkit-box-shadow: 10px 14px 51px -13px rgba(195, 97, 252, 0.58);
    -moz-box-shadow: 10px 14px 51px -13px rgba(195, 97, 252, 0.58);
    box-shadow: 10px 14px 51px -13px rgba(195, 97, 252, 0.58);
  }

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 92%;
    display: block;
    border-radius: 0%;
    margin-top: 0rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2rem;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    :hover {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 92%;
    display: block;
    border-radius: 0%;
    margin-top: 0rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2rem;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    :hover {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

export default About
