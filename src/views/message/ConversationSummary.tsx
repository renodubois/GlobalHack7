import React from 'react';
import moment from 'moment-timezone';
import _ from 'underscore';

import {View, Text, StyleSheet} from 'react-native';
import {Message} from '../../types/Message';

type Props = {
    Messages: Message[],
    ConversationId: Message['ConversationId']
};

export default class ConversationSummary extends React.Component<Props> {
    render(){
        const {Messages} = this.props;

        if(!_.size(Messages)){
            return null;
        }

        const Message = Messages[0];

        return (
            <View style={styles.container}>
                <Text>{Message.FromUserId}</Text>
                <Text>{Message.Text}</Text>
                <Text>{moment.tz(Message.DateSent, 'UTC').format()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
