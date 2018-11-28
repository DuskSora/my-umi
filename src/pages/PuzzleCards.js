import { Component } from 'react';
import { Card, Button } from 'antd';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'dva';

const namespace = "puzzlecards";

const mapStateToProps = state => {
    const cardList = state[cardList].cardList;
    return cardList;
};

@connect(mapStateToProps)
export default class PuzzleCards extends Component {
    // addNewCard = () => {
    //     this.setState(prevState => {
    //         const prevCardList = prevState.cardList;
    //         this.counter += 1;
    //         const card = {
    //             id: this.counter,
    //             setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    //             punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //         };
    //         return {
    //             cardList: prevCardList.concat(card)
    //         }
    //     });
    // }

    render() {
        return (
            <div>
                {this.props.cardList.map(item => (
                    <Card key={item.id}>
                        <div>Q: {item.setup}</div>
                        <div>
                            <strong>A: {item.punchline}</strong>
                        </div>
                    </Card>
                ))}
                {/* <div>
                    <Button onClick={this.addNewCard}>添加卡片</Button>
                </div> */}
            </div>
        );
    }
};