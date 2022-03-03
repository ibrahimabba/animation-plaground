import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
    withSpring,
    useAnimatedGestureHandler
} from 'react-native-reanimated';
import { PanGestureHandler } from "react-native-gesture-handler";

export default function EventsExample() {
    const pressed = useSharedValue(false);
    const startingPosition = 100;
    const x = useSharedValue(startingPosition);
    const y = useSharedValue(startingPosition);


    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            pressed.value = true;
        },
        onActive: (event, ctx) => {
            x.value = startingPosition + event.translationX;
            y.value = startingPosition + event.translationY;
        },
        onEnd: (event, ctx) => {
            pressed.value = false;
            x.value = withSpring(startingPosition);
            y.value = withSpring(startingPosition);
        },
    });
    const uas = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? '#FEEF86' : '#001972',
            transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }, { translateX: x.value }, { translateY: y.value }],
        };
    });


    return (
        <PanGestureHandler onGestureEvent={eventHandler}>
            <Animated.View style={[styles.ball, uas]} />
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    ball: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
    },
});
