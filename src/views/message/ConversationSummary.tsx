import React from 'react';
import moment from 'moment-timezone';
import _ from 'underscore';

import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {Message} from '../../types/Message';

type Props = {
    Messages: Message[],
    ConversationId: Message['ConversationId'],
    navigation: any
};

export default class ConversationSummary extends React.Component<Props> {
    _onPressButton = () => {
        this.props.navigation.navigate('Conversation', this.props);
    }

    render(){
        const { Messages } = this.props;

        if(!_.size(Messages)){
            return null;
        }

        const Message = Messages[0];

        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <View style={styles.container}>
                    <Image style={styles.picture} source={{ uri: 'https://www.lessannoyingcrm.com/i/team/58723.jpg' }} />
                    <View style={styles.thread}>
                        <Text>{Message.FromUserId}</Text>
                        <Text>{Message.Text}</Text>
                        <Text>{moment.tz(Message.DateSent, 'UTC').format()}</Text>
                    </View>
                </View>
            </TouchableHighlight>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        margin: 15
    },
    picture: {
        height: 50,
        width: 50,
        flex: 1
    },
    thread: {
        flex: 1
    }
});
