import React, { Component } from 'react';
import { Image, Navigator } from 'react-native';
import { Spinner, Button, Container, Header, Title, Content, Text, Icon, Card, CardItem } from 'native-base';

var spinner = React.createClass({
    render: function() {
        return (
            <Spinner/>
        );
    }
});

class DetailPage extends Component {
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator} />
        );
    }
    renderScene(route, navigator) {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={() => this.props.navigator.pop()}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    <Title>Detail</Title>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Ligne {this.props.i+1}</Text>
                        </CardItem>

                        <CardItem>
                            <Image
                                style={{ resizeMode: 'cover', width: null }}
                                source={{uri: 'https://unsplash.it/200/?random&' + this.props.i}}
                            />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

module.exports = DetailPage;
