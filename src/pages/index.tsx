import React, { useState, useEffect} from "react";
import 'remixicon/fonts/remixicon.css'
import { ImLink } from 'react-icons/im';
import { Button, Box, Columns, Container, Block, Hero, Footer} from 'react-bulma-components';
import { Form } from 'react-bulma-components';
const { Input, Field, Control, Label } = Form;
import Header  from '../components/header'
import { shortenLink } from "../shortenLink";

import LinkCard from '../components/linkCard';
import '../styles/theme.scss';
import '../styles/index.scss';

let shortUrl = "";
let longUrl = "";



const IndexPage = () => {
let showLinkCard = false;
const [m, setM] = useState(0);
const [link, setLink] = useState();
  return (
  <Container className="margin-center wrapper is-flex-grow-5">
    <Header />
    <section className="hero is-medium">
      <div className="hero-body">
        <p className="title hero-title">
          <mark>Shorten your link!</mark>
        </p>  
        <p className="subtitle">
          Medium subtitle
        </p>
      </div>
    </section>
    <Columns className="top-margin-center is-justify-content-center">
      <Columns.Column className="is-half is-justify-content-center">
      <div className="tape-section"></div>
        <Container className="has-background-warning has-text-centered sticky-note m-2 p-5">
          <Field	>
            <Control className=" has-icons-right has-icons-left">
              <Input onChange={(e) => setLink(e)} className="has-background-warning-light is-expanded has-text-weight-light is-large shortenTextInput" type="text" placeholder="Paste a link" />
              <span className="icon is-left">
                <ImLink />
              </span>
              <span className="icon clickable is-right">
                <Button onClick={ () =>  setM(m+1)} color="primary" className="has-text-weight-light shortenButton">Shorten</Button>
              </span>
            </Control>
          </Field>
          <a className="more-button">
              <span className="more-button-text">More Options</span>
              <span className="icon is-right">
              <i className="ri-arrow-down-s-fill"></i>
              </span>
          </a>
          {m > 0 &&
            <LinkCard data={m.data} longUrl={link?.target.value} m={m}/>
          }
        </Container>
      </Columns.Column>
    </Columns>
    <Footer className="footer has-text-centered"><a href="http://treygaulin.com">Built by Trey Gaulin</a></Footer>
  </Container>
)}
export default IndexPage

