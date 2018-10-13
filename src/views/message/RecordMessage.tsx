import React from 'react';
import { Alert, StyleSheet, TouchableHighlight, Text, View, Switch, Slider, Image } from 'react-native';
import { Player, Recorder, MediaStates } from 'react-native-audio-toolkit';
import Button from 'react-native-button';

type Props = {};

let filename = 'test.mp4';

export default class RecordMessage extends React.Component<Props> {
    constructor(props: any) {
        super(props);

        this.state = {
            playPauseButton: 'Preparing...',
            recordButton: 'Preparing...',

            stopButtonDisabled: true,
            playButtonDisabled: true,
            recordButtonDisabled: true,

            loopButtonStatus: false,
            progress: 0,

            error: null
        };
    }

    componentWillMount() {
        this.player = null;
        this.recorder = null;
        this.lastSeek = 0;

        this._reloadPlayer();
        this._reloadRecorder();

        this._progressInterval = setInterval(() => {
            if (this.player && this._shouldUpdateProgressBar()) {// && !this._dragging) {
                this.setState({ progress: Math.max(0, this.player.currentTime) / this.player.duration });
            }
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this._progressInterval);
    }

    _shouldUpdateProgressBar() {
        // Debounce progress bar update by 200 ms
        return Date.now() - this.lastSeek > 200;
    }

    _updateState(err) {
        this.setState({
            playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play',
            recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',
            stopButtonDisabled: !this.player || !this.player.canStop,
            playButtonDisabled: !this.player || !this.player.canPlay || this.recorder.isRecording,
            recordButtonDisabled: !this.recorder || (this.player && !this.player.isStopped),
        });
    }

    _playPause() {
        this.player.playPause((err, playing) => {
            if (err) {
                this.setState({
                    error: err.message
                });
            }
            this._updateState();
        });
    }

    _stop() {
        this.player.stop(() => {
            this._updateState();
        });
    }

    _seek(percentage) {
        if (!this.player) {
            return;
        }

        this.lastSeek = Date.now();

        let position = percentage * this.player.duration;

        this.player.seek(position, () => {
            this._updateState();
        });
    }

    _reloadPlayer() {
        if (this.player) {
            this.player.destroy();
        }

        this.player = new Player(filename, {
            autoDestroy: false
        }).prepare((err) => {
            if (err) {
                console.log('error at _reloadPlayer():');
                console.log(err);
            } else {
                this.player.looping = this.state.loopButtonStatus;
            }

            this._updateState();
        });

        this._updateState();

        this.player.on('ended', () => {
            this._updateState();
        });
        this.player.on('pause', () => {
            this._updateState();
        });
    }

    _reloadRecorder() {
        if (this.recorder) {
            this.recorder.destroy();
        }

        this.recorder = new Recorder(filename, {
            bitrate: 256000,
            channels: 2,
            sampleRate: 44100,
            quality: 'max'
            //format: 'ac3', // autodetected
            //encoder: 'aac', // autodetected
        });

        this._updateState();
    }

    _toggleRecord() {
        if (this.player) {
            this.player.destroy();
        }

        this.recorder.toggleRecord((err, stopped) => {
            if (err) {
                this.setState({
                    error: err.message
                });
            }
            if (stopped) {
                this._reloadPlayer();
                this._reloadRecorder();
            }

            this._updateState();
        });
    }

    _toggleLooping(value) {
        this.setState({
            loopButtonStatus: value
        });
        if (this.player) {
            this.player.looping = value;
        }
    }

    render() {

        //I've commented this out because I want to keep this code for reference in implementing other features around the app -- RL

        // return (
        //     <View style={{flex: 1}}>
        //         <View>
        //             <Text style={styles.title}>
        //                 Playback
        //             </Text>
        //         </View>
        //         <View style={styles.buttonContainer}>
        //             <Button disabled={this.state.playButtonDisabled} style={styles.button} onPress={() => this._playPause()}>
        //                 {this.state.playPauseButton}
        //             </Button>
        //             <Button disabled={this.state.stopButtonDisabled} style={styles.button} onPress={() => this._stop()}>
        //                 Stop
        //             </Button>
        //         </View>
        //         <View style={styles.slider}>
        //             <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress} />
        //         </View>
        //         <View>
        //             <Text style={styles.title}>
        //                 Recording
        //             </Text>
        //         </View>
        //         <View style={styles.buttonContainer}>
        //             <Button disabled={this.state.recordButtonDisabled} style={styles.button} onPress={() => this._toggleRecord()}>
        //                 {this.state.recordButton}
        //             </Button>
        //         </View>
        //         <View>
        //             <Text style={styles.errorMessage}>{this.state.error}</Text>
        //         </View>
        //     </View>
        // );

        return (
            <View style={styles.pageContainer}>
                <View>
                    <Text style={styles.title}>Send a message to Jan!</Text>
                </View>
                <View>
                    <Button
                        containerStyle={styles.recordButton}
                        onPress={() => this._toggleRecord()}
                        style={{color: 'white'}}
                    >
                        <Image source={this.recorder && this.recorder.isRecording ? require('../../baseline_stop_white_24.png') : require('../../baseline_mic_none_white_24.png')} />
                    </Button>
                </View>
                <View style={styles.recordingSound}>
                    <Text>HODOR</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        fontSize: 20,
        backgroundColor: 'white',
    },
    slider: {
        height: 10,
        margin: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 50
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    errorMessage: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: 'red'
    },
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200
    },
    recordButton: {
        borderRadius: 50,
        height: 100,
        width: 100,
        backgroundColor: '#e74c3c',
        paddingTop: 5,
        paddingLeft: 2
    },
    recordingSound: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        //paddingLeft: 50,
        //paddingRight: 50,
        //paddingTop: 20,
        paddingBottom: 20,
        width: '75%',
        textAlign: 'center',
        marginTop: 30
    }
});