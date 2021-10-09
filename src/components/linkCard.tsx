import { Box, Columns, Button } from 'react-bulma-components';
import React, { useState, useEffect } from 'react';
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai';
import validUrl from 'valid-url';


class LinkCard extends React.Component {
    constructor(props: any){
        super(props);

        this.state = {
            shortenedUrl: null,
            copied: false
        }
    }
    prevM = 0;
    async componentDidUpdate() {
        if(this.prevM !== this.props.m){
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': "*",
                },
                body: JSON.stringify({longUrl: this.props.longUrl})
            };
            this.prevM = this.props.m;
            const response = await fetch('http://localhost:8000/v1/shorturl', requestOptions);
            const data = await response.json();
            this.setState({ shortenedUrl: data.shortUrl });
        }
    }

/*
    async componentDidMount() {
        axios({
            method: 'post',
            url: 'http://localhost:8000/v1/shorturl',
            data: {
                longUrl: 'https://treygaulin.com/',
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response: any) {
            console.log(response);
        }).catch(function (error: any) {
            //console.log(error);
        });
        
    }
    */
    render() {
        const { shortenedUrl, copied} = this.state;
        return (
            <Box className="has-background-warning-light align-content-center">
                <Columns className="is-vcentered is-gapless">
                    <Columns.Column className="is-6 has-text-left">
                        <a href={this.props.longUrl}>{this.props.longUrl}</a>
                    </Columns.Column>
                    <Columns.Column className="has-text-right is-5">
                        <a href={shortenedUrl}>{shortenedUrl}</a>
                    </Columns.Column>
                    <Columns.Column className="is-1 has-text-right">
                        <Button className="copy-button is-medium is-ghost" onClick={() => {
                            navigator.clipboard.writeText(shortenedUrl);
                            this.setState({copied: true})}}>
                            <span className="icon is-medium">
                            {copied ?  <AiOutlineCheck className="copy-icon icon" /> : <HiOutlineClipboardCopy className="copy-icon icon" />}
                            </span>
                        </Button>
                    </Columns.Column>
                </Columns>
            </Box>
        )
    }
  }

export default LinkCard;