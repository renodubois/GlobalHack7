import * as React from 'react';
import _ from 'underscore';
import moment from 'moment-timezone';

import { StyleSheet, Text, View } from 'react-native';
import FakeConversationData from './fake_conversation_data';
import ConversationSummary from './ConversationSummary';

import {Message} from '../../types/Message';

type Props = {};
export default class Inbox extends React.Component<Props> {    
    render() {
        if(_.size(FakeConversationData) == 0){
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>You have no conversations!</Text>
                </View>
            );
        }

        const GroupedData = _.chain(FakeConversationData).groupBy('ConversationId').value();
        let MostRecentConversations: any = {};

        _.each(GroupedData, (Messages, ConversationId: number) => {
            MostRecentConversations[ConversationId] = _.max(Messages, (Message) => { return moment(Message.DateSent).unix() });
        });

        const SortedData = _.sortBy(MostRecentConversations, (Message: Message) => { return Message.DateSent; }).reverse();

        return (
            <View style={styles.container}>
                {_.map(SortedData, (Message: Message) => {
                    return <ConversationSummary key={Message.ConversationId} Messages={GroupedData[Message.ConversationId]} ConversationId={Message.ConversationId} />;
                })}                    
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
