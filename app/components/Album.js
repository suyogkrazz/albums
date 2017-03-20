/**
 * Created by krazz on 3/20/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

const {
    View,Text
} = ReactNative;


class Album extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: false}
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.props.fetchAlbums().then( (res) => {
            this.setState({searching: false })
        });
    }

    render() {
        return (
            <View>
                <Text>
                    lorem
                </Text>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        albums: state.albums
    };
}

export default connect(mapStateToProps)(Album);
