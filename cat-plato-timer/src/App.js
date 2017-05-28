import React, { Component } from 'react';
import styled from 'styled-components'
import napping from './assets/napping.gif';
import working from './assets/working.gif';

const Wrapper = styled.section`
  padding: 4em;
  background-size: 100%;
  background: black;
  display: flex;
  flex-directio: row;
`;

const Title = styled.h1`
	font-size: 3em;
	text-align: center;
	color: palevioletred;
`;

const Timer = styled.div`
  text-align: center;
  font-size: 7em;
  color: white;   
`

const Hour = styled.span`

`;

const Minute = styled.span`

`;


const SetTime = styled.input`
  font-size: 0.3em;
`

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`

class App extends Component { 

  timer() {
    let hour = 11;
    let minute = 1; 
    return {
      hour,
      minute
    }
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Title>Timer</Title>
          <Timer>
            <Hour>{this.timer().hour}</Hour>:
            <Minute>{this.timer().minute}</Minute>
          </Timer>
          <Timer>
            <SetTime type="number"></SetTime>
          </Timer>
          <div>
            <Button>Pause</Button>
            <Button primary>Reset</Button>
          </div>
          <div>
            <Button primary>Start</Button>
          </div>
        </div>
        <div>
          <img src={working} alt=""/>
        </div>
      </Wrapper>
    );
  }
}

export default App;
