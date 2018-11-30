import { Component } from 'react';
import { Card, Button } from 'antd';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'dva';

const namespace = "puzzlecards";

const mapStateToProps = state => ({
   cardList : state[namespace].cardList
});

const mapDispatchToProps = dispatch => ({
    onDidMount: () => {
        dispatch({
            type: `${namespace}/queryInitCards`
        });
    },
    handleClick: newCard => {
        const action = {
            type: namespace + "/addNewCard",
            payload: newCard
        };
        dispatch(action);
    }
});

@connect(mapStateToProps, mapDispatchToProps)
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

    componentDidMount() {
        this.props.onDidMount();
    }

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
                <div>
                    <Button onClick={() => {
                        this.props.handleClick({
                            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            punchline: 'here we use dva'
                        });
                    }}>添加卡片</Button>
                </div>
            </div>
        );
    }
};