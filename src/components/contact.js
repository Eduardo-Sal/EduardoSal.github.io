import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'

import { Container, Section, theme, media } from '../styles'

const Title = styled.h2`
  color: ${theme.colors.light};
  margin-bottom: 25px;
  font-size: 36px;
`;

const Copy = styled.h5`
  color: ${theme.colors.light};
  font-size: 20px;
  margin-bottom: 20px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 5%;
  padding-top: 50px;

  ${media.medium} {
    flex-direction: column;
    text-align: left;
    padding-left: 20px;
  }
`

const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    width: 100%;
    margin-bottom: 15px;
  }

  label {
    color: ${theme.colors.light};
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    max-width: 400px;
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.light};
    margin-top: 5px;
    border-radius: ${theme.borderRadius};
    padding: 12px;
    font-size: 14px;

    &.error {
      border: 1px solid red;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    display: block;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.dark};
    border-radius: ${theme.borderRadius};
    padding: 12px 20px;
    font-size: 16px;
    width: 200px;
    margin-left: auto;
    margin-top: 20px;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${theme.colors.yellowDark};
    }

    &:focus {
      outline: none;
    }
  }
`

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false };
  }

  componentDidMount = () => {
    ScrollReveal().reveal(this.refs.connect, theme.scrollRevealConfig)
    ScrollReveal().reveal(this.refs.image, theme.scrollRevealConfig)
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  handleSubmission = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "Contact Form", ...data })
    })
      .then(() => this.setState({submitted: true}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Section bgColor="#181a1b" id="contact">
        <Element name="contact" />
        <Container>
          <FlexRow>
            <div ref="connect">
                {!this.state.submitted ?
                <>
                    <Title>Let's Connect.</Title>
                    <Copy>If you want to know more about me or my work, or if you'd just like to say hello, feel free to send me a message. I'd love to hear from you.</Copy>
                  </>
                  :
                  <>
                    <Title>Thanks for reaching out!</Title>
                    <Copy>I'll get back to you soon.</Copy>
                  </> }
            </div>
          </FlexRow>
        </Container>
      </Section>
    )
  }
}

export default Contact