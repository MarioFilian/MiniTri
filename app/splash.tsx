import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  withRepeat,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

import { EcuadorColors } from '@/constants/theme';
import { FootballLoading } from '@/components/football-loading';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();

  // Animation values
  const logoScale = useSharedValue(0.3);
  const logoOpacity = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(20);
  const subtitleOpacity = useSharedValue(0);
  const loadingOpacity = useSharedValue(0);
  const progress = useSharedValue(0);
  const shimmer = useSharedValue(0);
  const flagStripeOpacity = useSharedValue(0);

  const navigateToHome = useCallback(() => {
    router.replace('/(tabs)');
  }, [router]);

  useEffect(() => {
    // Logo animation - fade in + scale
    logoOpacity.value = withTiming(1, { duration: 800, easing: Easing.out(Easing.cubic) });
    logoScale.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.back(1.2)) });

    // Flag stripes appear
    flagStripeOpacity.value = withDelay(
      400,
      withTiming(1, { duration: 600 })
    );

    // Title appears
    titleOpacity.value = withDelay(
      600,
      withTiming(1, { duration: 700 })
    );
    titleTranslateY.value = withDelay(
      600,
      withTiming(0, { duration: 700, easing: Easing.out(Easing.cubic) })
    );

    // Subtitle appears
    subtitleOpacity.value = withDelay(
      1000,
      withTiming(1, { duration: 600 })
    );

    // Loading section
    loadingOpacity.value = withDelay(
      1200,
      withTiming(1, { duration: 500 })
    );

    // Progress bar animation
    progress.value = withDelay(
      1400,
      withTiming(100, { duration: 2000, easing: Easing.inOut(Easing.cubic) })
    );

    // Shimmer on logo
    shimmer.value = withDelay(
      800,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
          withTiming(0, { duration: 1500, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        false
      )
    );

    // Navigate after splash
    const timer = setTimeout(() => {
      navigateToHome();
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleTranslateY.value }],
  }));

  const subtitleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
  }));

  const loadingAnimatedStyle = useAnimatedStyle(() => ({
    opacity: loadingOpacity.value,
  }));

  const flagStripeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: flagStripeOpacity.value,
  }));

  const shimmerStyle = useAnimatedStyle(() => ({
    opacity: 0.15 + shimmer.value * 0.15,
  }));

  return (
    <View style={styles.container}>
      {/* Background glow effect */}
      <Animated.View style={[styles.backgroundGlow, shimmerStyle]} />

      {/* Top decorative flag stripe */}
      <Animated.View style={[styles.flagStripe, flagStripeAnimatedStyle]}>
        <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.yellow }]} />
        <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.flagBlue }]} />
        <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.red }]} />
      </Animated.View>

      {/* Main content */}
      <View style={styles.content}>
        {/* Logo */}
        <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
          <View style={styles.logoGlow} />
          <Image
            source={require('@/assets/images/ecuador-logo.png')}
            style={styles.logo}
            contentFit="contain"
          />
        </Animated.View>

        {/* Title */}
        <Animated.View style={[styles.titleContainer, titleAnimatedStyle]}>
          <Text style={styles.title}>SELECCIÓN ECUATORIANA</Text>
          <Text style={styles.titleAccent}>DE FÚTBOL</Text>
        </Animated.View>

        {/* Subtitle */}
        <Animated.Text style={[styles.subtitle, subtitleAnimatedStyle]}>
          🇪🇨 La Tri 🇪🇨
        </Animated.Text>
      </View>

      {/* Loading animation */}
      <Animated.View style={[styles.loadingContainer, loadingAnimatedStyle]}>
        <FootballLoading progress={progress.value} showText={true} />
      </Animated.View>

      {/* Bottom decorative flag stripe */}
      <Animated.View style={[styles.flagStripeBottom, flagStripeAnimatedStyle]}>
        <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.yellow }]} />
        <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.flagBlue }]} />
        <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.red }]} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EcuadorColors.darkNavy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundGlow: {
    position: 'absolute',
    width: SCREEN_WIDTH * 1.5,
    height: SCREEN_WIDTH * 1.5,
    borderRadius: SCREEN_WIDTH * 0.75,
    backgroundColor: EcuadorColors.navyBlue,
    top: '15%',
  },
  flagStripe: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    flexDirection: 'row',
  },
  flagStripeBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    flexDirection: 'row',
  },
  stripeSegment: {
    flex: 1,
    height: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  logoContainer: {
    width: 180,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoGlow: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: EcuadorColors.gold,
    opacity: 0.08,
  },
  logo: {
    width: 160,
    height: 180,
  },
  titleContainer: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: EcuadorColors.white,
    letterSpacing: 3,
    textAlign: 'center',
  },
  titleAccent: {
    fontSize: 26,
    fontWeight: '900',
    color: EcuadorColors.gold,
    letterSpacing: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: EcuadorColors.goldLight,
    letterSpacing: 4,
    fontWeight: '500',
    marginTop: 4,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
});
