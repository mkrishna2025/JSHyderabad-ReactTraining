
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Drawer
} from 'native-base';
import { Icon } from 'native-base';

import SideBar from '../components/sidebar.js';

export default class NBScreen extends Component {
  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }
  render() {
    return (
      <Container>
          <Drawer
              ref={ref => {this._drawer = ref;}}
              content={<SideBar navigator={this.props.navigation} />}
              onClose={() => this.closeDrawer()}
             >
           <Header style={{backgroundColor: '#00bc78', }}>
                <Left>
                    <Button transparent onPress={() => this.openDrawer()}>
                    <Icon name="bars" style={styles.bar} />
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.text}>Trainer Center</Text>
                </Body>                  
            </Header>
        <Content>
           <View style={styles.component1}>
            <TouchableOpacity onPress={() => console.log('Need Implementation')}>
                <Image source={require("./customer1.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> console.log('Need Implementation')} >
                <Image source={require("./courses.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Courses
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.component1}>
            <TouchableOpacity onPress={()=> console.log('Need Implementation')}>
                <Image source={require("./map.jpg")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Map
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> console.log('Need Implementation')} >
                <Image source={require("./nearme.jpg")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Near Me
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.component1}>
            <TouchableOpacity onPress={() => console.log('Need Implementation')}>
                <Image source={require("./queries.jpg")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Queries
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> console.log('Need Implementation')}>
                <Image source={require("./contactus.jpg")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Contact Us
                </Text>
            </TouchableOpacity>
            </View>
         </Content>
         </Drawer>
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  component1: {
    top: 20,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bar: {
    color: '#ffffff',
    fontSize: 25,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  }
});