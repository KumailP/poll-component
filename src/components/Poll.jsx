import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #1a2833;
  font-family: "Oswald", sans-serif;
  padding: 10px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: #ffffff;
  width: 100%;
  flex-basis: 100%;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  :not(:first-child) {
    margin-top: 5px;
  }
`;

const CardLabel = styled.h1`
  padding: 0;
  font-size: ${props => (props.fontSize ? props.fontSize * 2 : "24")}px;
  font-weight: 700;
  margin: auto;
  text-align: center;
  pointer-events: none;
`;

const CardImage = styled.img`
  height: 70%;
  margin: auto 5%;
`;

const Btns = styled.div`
  display: flex;
  posiiton: relative;
  flex-direction: row;
  flex-wrap: no-wrap;
`;

const VoteBtn = styled.div`
  padding: 0px 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  color: ${props => (props.color ? props.color : "red")};
  transition: 0.3s all ease;

  &:hover {
    transition: 0.3s all ease;
    background-color: #fafafa;
  }
`;

const BtnText = styled.span`
  height: 100%;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${props => props.fontSize}px;
  writing-mode: ${props => props.writingMode};
  transform: rotate(180deg);
`;

const BoostBtn = styled(VoteBtn)`
  flex: 1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  color: #fff;
  background-color: ${props => (props.color ? props.color : "red")};
  &:hover {
    background-color: ${props => (props.color ? props.color : "red")};
    color: #fafafa;
  }
`;

export default class Poll extends Component {
  state = {
    colors: [],
    noOfBoxes: 0
  };

  componentDidMount() {
    const { options } = this.props;

    const noOfBoxes = options.length;

    const colors = options.map(() => this.getRandomColor());
    this.setState({ colors, noOfBoxes });
  }

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  getFontSize = () => {
    const { noOfBoxes } = this.state;
    console.log(noOfBoxes);

    if (noOfBoxes >= 1 && noOfBoxes <= 2) {
      return 23;
    } else if (noOfBoxes >= 3 && noOfBoxes <= 6) {
      return 16;
    } else if (noOfBoxes >= 7 && noOfBoxes < 8) {
      return 12;
    } else if (noOfBoxes >= 8) {
      return 8;
    }

    return 24;
  };

  render() {
    const { colors, noOfBoxes } = this.state;
    const { options } = this.props;
    console.log(options);
    const fontSize = this.getFontSize();
    console.log(fontSize);

    return (
      <Main>
        {options.map((option, i) => (
          <Card key={option.label}>
            {option.imgUrl && (
              <CardImage
                src={option.imgUrl}
                alt={option.label}
                boxes={noOfBoxes}
              />
            )}
            <CardLabel
              fontSize={fontSize}
              style={{ color: colors.length > 0 && colors[i] }}
            >
              {option.label}
            </CardLabel>
            <Btns>
              <VoteBtn color={colors[i]}>
                <BtnText writingMode={noOfBoxes >= 8 ? "horizontal-lr" : "vertical-rl"} fontSize={noOfBoxes >= 8 ? fontSize * 2 : fontSize}>
                  V{noOfBoxes < 8 ? "ote" : null}
                </BtnText>
              </VoteBtn>
              <BoostBtn color={colors[i]}>
                <BtnText writingMode={noOfBoxes >= 8 ? "horizontal-lr" : "vertical-rl"} fontSize={noOfBoxes >= 8 ? fontSize * 2 : fontSize}>
                  B{noOfBoxes < 8 ? "oost" : null}
                </BtnText>
              </BoostBtn>
            </Btns>
          </Card>
        ))}
      </Main>
    );
  }
}
