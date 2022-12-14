import styled from 'styled-components'

//  Buttons

export const Button = styled.button`
width: 80%;
height: auto;
display: block;
margin-left: auto;
margin-right: auto; 
margin-top: 60px; 
padding: 0.6rem;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  background-color: #00b1ff;
  border: 2px solid #00b1ff;
  cursor: pointer;
  width: 10%;
  transition: 0.25s ease;
  border-radius: 5%;
  margin-bottom: 2rem;
  z-index: 1;
  position: relative;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: #444444;
    border-color: transparent;
    background-color: transparent;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 60%;
    font-size: 12px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 60%;
    font-size: 14px;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 45%;
    font-size: 16px;
  }
`

// Images

export const BgImg = styled.img`
  position: absolute;
  width: 96%;
  margin-top: -10rem;
  height: auto;
  z-index: -2;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    top: 12vh;
    width: 50%;
  }
  @media only screen and (max-width: 600px) and (min-width: 321px) {
    top: 10vh;
    width: 50%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    top: 10vh;
    width: 25%;
  }
`
export const BgImg2 = styled.img`
  width: 60%;
  margin-left: 10%;
  margin-right: auto;
  @media (max-width: 600px) {
    width: 60%;
    height: auto;
    margin-left: 20%;
    margin-top: 3rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    height: auto;
    margin-left: 20%;
  }
`
export const BgImg3 = styled(BgImg2)`
  margin-left: 19%;

  @media (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 80%;
    margin-left: 12%;
  }
`

// Headers

export const Header1 = styled.h1`
  color: #707070;
  text-align: center;
  font-style: normal;
  font-family: 'Montserrat';
  font-size: 150px;
  position: relative;
  z-index: -2;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 39px;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 55px;
  }
`

export const Header2 = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  text-align: left;
  color: #636E75;
  margin-left: calc(80px + ((-80) - 80) * ((100vw - 300px) / (1600 - 300)));
  margin-bottom: 7vh;
  margin-top: 20px;
  border: none;
  border-bottom: 2px solid;
  border-radius: 130px 50px/4px 2px;
  padding: 10px;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
    color: #636E75;
    margin-left: 0;
    margin-bottom: 7vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    color: #636E75;
    margin-left: 0;
    margin-bottom: 7vh;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 40px
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
    text-transform: uppercase;
    text-align: center;
    color: #636E75;
    margin-left: 0;
    margin-bottom: 7vh;
  }
`




export const Title = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 25px;
    margin-top: 15vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 30px;
  }
`

export const TextPart1 = styled.h1`
  color: #ffffff;
  margin-top:20px;
  margin-left:20px;
  margin-right:20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  justify-content: center ;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 25px;
    margin-top: 15vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 18px;
    margin-top:0px;
    margin-bottom:20px;
  }
`
export const TextPart2 = styled.h1`
  color: #707070;
  margin-top:20px;
  margin-left:20px;
  margin-right:20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  justify-content: center ;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 25px;
    margin-top: 15vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 18px;
    margin-top:0px;
  }
`
// Containers

export const divContainer = styled.div`
  margin-left: 5vw;
  margin-top: 55vh;
  flex-grow: 1;
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin-left: 5vw;
    margin-top: 20vh;
  }
`

// Form

export const Form = styled.form`
  max-width: 600px;
  text-align: center;
  margin: 30px auto;

  input,
  textarea {
    border: 0;
    padding: 1.5em;
    display: block;
    width: 100%;
    margin-bottom: 1em;
    font-family: Montserrat, sans-serif;
    resize: none;
    background-color: rgb(255, 255, 255);
    color: #000000;
    outline: none;
    border: none;
    border-radius: 20px;
    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  }

  input[type='text'],
  input[type='email'] {
    @media only screen and (min-width: 100px) and (max-width: 320px) {
      height: 5px;
    }
    @media only screen and (min-width: 321px) and (max-width: 600px) {
      height: 50px;
    }
  }

  textarea {
    height: 126px;
    @media only screen and (min-width: 100px) and (max-width: 320px) {
      height: 80px;
    }
    @media only screen and (min-width: 321px) and (max-width: 600px) {
      height: 110px;
    }
  }

  input:focus,
  textarea:focus {
    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.15);
    -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.15);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  input[type='submit'] {
    color: white;
    margin-top: 5vh;
    padding: 1em;
    background-color: #4eb7d1;
    border-radius: 21px;
    cursor: pointer;
    width: 30%;
    margin-right: auto;
    margin-left: auto;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    box-shadow: 0 10px 30px 0px #7dd2eccc;
    -moz-box-shadow: 0 10px 30px 0px #7dd2eccc;
    -webkit-box-shadow: 0 10px 30px 0px #7dd2eccc;
    -o-box-shadow: 0 10px 30px 0px #7dd2eccc;
    -ms-box-shadow: 0 10px 30px 0px #7dd2eccc;
  }

  input[type='submit']:hover {
    background-color: #2f94f1;
    box-shadow: 0 10px 30px 0px #bebebe;
    -moz-box-shadow: 0 10px 30px 0px #bebebe;
    -webkit-box-shadow: 0 10px 30px 0px #bebebe;
    -o-box-shadow: 0 10px 30px 0px #bebebe;
    -ms-box-shadow: 0 10px 30px 0px #bebebe;
  }
`
