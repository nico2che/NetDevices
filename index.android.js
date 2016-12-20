import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Title } from 'native-base';

var ListPage = require('./ListPage');
var DetailPage = require('./DetailPage');

class NetDevices extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{id: 'ListPage'}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }} />
        );
    }
    renderScene(route, navigator) {
        var routeId = route.id;

        if (routeId === 'ListPage') {
            return (
                <ListPage
                    {...route.passProps}
                    navigator={navigator} />
            );
        }
        if (routeId === 'DetailPage') {
            return (
                <DetailPage
                    {...route.passProps}
                    navigator={navigator} />
            );
        }
        return (
            <Container>
                <Header>
                    <Title>404</Title>
                </Header>
                <Content>
                    <Text>
                        Cette page n'existe pas
                    </Text>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('netdevices', () => NetDevices);
