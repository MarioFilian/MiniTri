import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  withDelay,
  Easing,
  interpolate,
} from 'react-native-reanimated';

import { EcuadorColors } from '@/constants/theme';

interface FootballLoadingProps {
  progress?: number; // 0-100
  showText?: boolean;
}

export function FootballLoading({ progress = 0, showText = true }: FootballLoadingProps) {
  const ballRotation = useSharedValue(0);
  const ballBounce = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const dot1 = useSharedValue(0);
  const dot2 = useSharedValue(0);
  const dot3 = useSharedValue(0);

  useEffect(() => {
    // Ball rotation - continuous spin
    ballRotation.value = withRepeat(
      withTiming(360, { duration: 1200, easing: Easing.linear }),
      -1,
      false
    );

    // Ball bounce - up and down
    ballBounce.value = withRepeat(
      withSequence(
        withTiming(-15, { duration: 400, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: 400, easing: Easing.in(Easing.quad) })
      ),
      -1,
      false
    );

    // Loading text fade in
    textOpacity.value = withDelay(
      300,
      withTiming(1, { duration: 600 })
    );

    // Animated dots
    dot1.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 400 }),
        withTiming(0.3, { duration: 400 })
      ),
      -1,
      false
    );
    dot2.value = withDelay(
      200,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 400 }),
          withTiming(0.3, { duration: 400 })
        ),
        -1,
        false
      )
    );
    dot3.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 400 }),
          withTiming(0.3, { duration: 400 })
        ),
        -1,
        false
      )
    );
  }, []);

  const ballAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: ballBounce.value },
      { rotate: `${ballRotation.value}deg` },
    ],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const dot1Style = useAnimatedStyle(() => ({ opacity: dot1.value }));
  const dot2Style = useAnimatedStyle(() => ({ opacity: dot2.value }));
  const dot3Style = useAnimatedStyle(() => ({ opacity: dot3.value }));

  return (
    <View style={styles.container}>
      {/* Football ball */}
      <Animated.View style={[styles.ballContainer, ballAnimatedStyle]}>
        <Text style={styles.ball}>⚽</Text>
      </Animated.View>

      {/* Tricolor Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.progressBarFill,
              { width: `${Math.min(progress, 100)}%` },
            ]}
          >
            <View style={styles.progressYellow} />
            <View style={styles.progressBlue} />
            <View style={styles.progressRed} />
          </Animated.View>
        </View>
      </View>

      {/* Loading text */}
      {showText && (
        <Animated.View style={[styles.loadingTextContainer, textAnimatedStyle]}>
          <Text style={styles.loadingText}>Cargando</Text>
          <Animated.Text style={[styles.dot, dot1Style]}>.</Animated.Text>
          <Animated.Text style={[styles.dot, dot2Style]}>.</Animated.Text>
          <Animated.Text style={[styles.dot, dot3Style]}>.</Animated.Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  ballContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    fontSize: 40,
  },
  progressBarContainer: {
    width: 200,
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressYellow: {
    flex: 1,
    backgroundColor: EcuadorColors.yellow,
  },
  progressBlue: {
    flex: 1,
    backgroundColor: EcuadorColors.flagBlue,
  },
  progressRed: {
    flex: 1,
    backgroundColor: EcuadorColors.red,
  },
  loadingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    color: EcuadorColors.gold,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 2,
  },
  dot: {
    color: EcuadorColors.gold,
    fontSize: 16,
    fontWeight: '500',
  },
});
