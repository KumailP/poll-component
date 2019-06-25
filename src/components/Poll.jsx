import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #1a2833;
  font-family: "Oswald", sans-serif;
  width: 500px;
  height: 300px;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = styled.div`
  margin: 1%;
  background-color: #ffffff;
  width: 98%;
  flex-basis: 100%;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  :not(:first-child) {
    margin-top: 0px;
  }
`;

const CardLabel = styled.h1`
  padding: 0;
  font-size: ${({noOfBoxes, fontSize}) => (noOfBoxes < 7 ? fontSize * 2 : fontSize * 1.5)}px;
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
  padding: 0px ${({ padding }) => padding}px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  color: ${({ color }) => (color ? color : "red")};
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
  font-size: ${({ fontSize }) => fontSize}px;
  writing-mode: ${({ boxes }) =>
    boxes >= 7 ? "horizontal-lr" : "vertical-rl"};
  transform: ${({ boxes }) => (boxes >= 7 ? "rotate(0deg)" : "rotate(180deg)")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BoostBtn = styled(VoteBtn)`
  flex: 1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  color: #fff;
  background-color: ${({ color }) => (color ? color : "red")};
  &:hover {
    background-color: ${({ color }) => (color ? color : "red")};
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
    } else if (noOfBoxes >= 3 && noOfBoxes <= 4) {
      return 20;
    } else if (noOfBoxes >= 4 && noOfBoxes < 7) {
      return 15;
    } else if (noOfBoxes >= 7) {
      return 20;
    }

    return 24;
  };

  getTextPadding = () => {
    const { noOfBoxes } = this.state;
    console.log(noOfBoxes);

    if (noOfBoxes >= 1 && noOfBoxes <= 2) {
      return 20;
    } else if (noOfBoxes >= 3 && noOfBoxes <= 4) {
      return 17;
    } else if (noOfBoxes >= 4 && noOfBoxes < 7) {
      return 13;
    } else if (noOfBoxes >= 7) {
      return 14;
    }

    return 15;
  };

  render() {
    const { colors, noOfBoxes } = this.state;
    const { options } = this.props;
    const fontSize = this.getFontSize();
    const padding = this.getTextPadding();

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
              fontSize={noOfBoxes < 6 ? fontSize : 12}
              style={{ color: colors.length > 0 && colors[i] }}
              noOfBoxes={noOfBoxes}
            >
              {option.label}
            </CardLabel>
            <Btns>
              <VoteBtn color={colors[i]} padding={padding}>
                <BtnText
                  boxes={noOfBoxes}
                  fontSize={fontSize}
                >
                  V{noOfBoxes < 7 ? "ote" : null}
                </BtnText>
              </VoteBtn>
              <BoostBtn color={colors[i]} padding={padding}>
                <BtnText
                  boxes={noOfBoxes}
                  fontSize={fontSize}
                >
                  B{noOfBoxes < 7 ? "oost" : null}
                </BtnText>
              </BoostBtn>
            </Btns>
          </Card>
        ))}
      </Main>
    );
  }
}
