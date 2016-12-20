import React, { Component } from 'react';
import { Navigator, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, List, ListItem, Text } from 'native-base';

class ListPage extends Component {
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
                    <Title>List</Title>
                </Header>
                <Content>
                    <List>
                        {[...Array(20)].map((x, i) =>
                            <ListItem button onPress={this.goDetailPage.bind(this, i)} key={{i}}>
                                <Text key={{i}}>Ligne n°{i+1}</Text>
                            </ListItem>
                        )}
                    </List>
                </Content>
            </Container>
        );
    }
    goDetailPage(index) {
        this.props.navigator.push({
            id: 'DetailPage',
            passProps: {
                i: index
            }
        });
    }
}

module.exports = ListPage;