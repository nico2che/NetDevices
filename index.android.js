import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Title } from 'native-base';

// Import de chaque page
var ListPage = require('./ListPage');
var DetailPage = require('./DetailPage');

class NetDevices extends Component {
    render() {
        // Navigator gère toute la navigation des pages et est transmis dans chaque composant
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

    // Affiche la bonne page pour chaque route, sinon une page d'erreur
    // On injecte Navigator et les variables dans chaque composant
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
                    <Title>Erreur</Title>
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

// Initialisation de l'application
AppRegistry.registerComponent('netdevices', () => NetDevices);
