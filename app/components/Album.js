/**
 * Created by krazz on 3/20/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { Card, CardItem, Left, Body ,Thumbnail, Text, Button,Content} from 'native-base';

const {
    ScrollView,
    View,
    Image, Linking,
    StyleSheet,
    ActivityIndicator,
} = ReactNative;

const AlbumBar= (props)=>{
    return <View style={styles.searchSection}>
                <Text >{props.text}</Text>
           </View>
}
class Album extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: false}
    }
    albums() {
        return Object.keys(this.props.fetchedAlbums).map(key => this.props.fetchedAlbums[key])
    }
    componentDidMount() {
        this.setState({ loading: true })
        this.props.fetchAlbums().then( (res) => {
            this.setState({loading: false })
        });
    }

    render() {
        return (
            <View style={styles.scene}>
                <AlbumBar text="Albums"/>
                <ScrollView style={styles.scrollSection} >
                    {!this.state.loading && this.albums().map((album) => {
                        return <Card key={album.id}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail square source={{ uri:album.thumbnail_image}} />
                                            <Body>
                                            <Text>{album.title}</Text>
                                            <Text note>{album.artist}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody style={{padding:12}}>
                                        <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 300 }} source={{uri:album.image}}/>
                                    </CardItem>

                                    <CardItem content style={{padding:12}}>
                                        <Content>
                                            <Button full info bordered onPress={()=>this.handleClick(album.url)} >
                                                <Text>Buy now</Text>
                                            </Button>
                                        </Content>
                                    </CardItem>
                            </Card>

                    })}
                    {this.state.loading ?  <View style={{flex: 1}}>
                                                <ActivityIndicator style={styles.centered} />
                                           </View>
                        : null }
                </ScrollView>
            </View>
        )
    }

    handleClick(url) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    }
}
const styles = StyleSheet.create({
    scene: {
        flex: 1,
        marginTop: 10
    },
    searchSection: {
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#646464',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'center',
    },
    scrollSection: {
        flex: 0.8
    },
    searchButton: {
        flex: 0.3,
    },
    titleText:{
        fontSize: 21,
        marginTop: 0,
        textAlign: 'center',
    },
    searchInput: {
        flex: 0.7,
        backgroundColor:'#DAF'

    },
});

function mapStateToProps(state) {
    return {
        fetchedAlbums: state.fetchedAlbums
    };
}

export default connect(mapStateToProps)(Album);
