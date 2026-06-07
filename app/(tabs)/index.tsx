import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  withSpring,
} from 'react-native-reanimated';

import { EcuadorColors, Colors } from '@/constants/theme';
import { InfoCard, InfoRow, AchievementBadge } from '@/components/info-card';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  // Entry animations
  const headerOpacity = useSharedValue(0);
  const headerScale = useSharedValue(0.9);
  const card1Translate = useSharedValue(40);
  const card1Opacity = useSharedValue(0);
  const card2Translate = useSharedValue(40);
  const card2Opacity = useSharedValue(0);
  const badgesOpacity = useSharedValue(0);
  const badgesTranslate = useSharedValue(30);

  useEffect(() => {
    // Header entrance
    headerOpacity.value = withTiming(1, { duration: 600 });
    headerScale.value = withSpring(1, { damping: 15, stiffness: 100 });

    // Card 1 slide up
    card1Opacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    card1Translate.value = withDelay(200, withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) }));

    // Card 2 slide up
    card2Opacity.value = withDelay(400, withTiming(1, { duration: 500 }));
    card2Translate.value = withDelay(400, withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) }));

    // Badges
    badgesOpacity.value = withDelay(600, withTiming(1, { duration: 500 }));
    badgesTranslate.value = withDelay(600, withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) }));
  }, []);

  const headerStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
    transform: [{ scale: headerScale.value }],
  }));

  const card1Style = useAnimatedStyle(() => ({
    opacity: card1Opacity.value,
    transform: [{ translateY: card1Translate.value }],
  }));

  const card2Style = useAnimatedStyle(() => ({
    opacity: card2Opacity.value,
    transform: [{ translateY: card2Translate.value }],
  }));

  const badgesStyle = useAnimatedStyle(() => ({
    opacity: badgesOpacity.value,
    transform: [{ translateY: badgesTranslate.value }],
  }));

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: Colors[colorScheme].background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header section */}
      <Animated.View style={[styles.header, headerStyle]}>
        {/* Flag stripe top */}
        <View style={styles.flagStripe}>
          <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.yellow }]} />
          <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.flagBlue }]} />
          <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.red }]} />
        </View>

        <View style={styles.headerContent}>
          <View style={styles.logoGlow} />
          <Image
            source={require('@/assets/images/ecuador-logo.png')}
            style={styles.headerLogo}
            contentFit="contain"
          />
          <Text style={styles.welcomeText}>BIENVENIDO</Text>
          <Text style={styles.teamName}>La Tri 🇪🇨</Text>
        </View>
      </Animated.View>

      {/* Content */}
      <View style={styles.content}>
        {/* Team Info Card */}
        <Animated.View style={card1Style}>
          <InfoCard title="Información del Equipo" icon="🏟️">
            <InfoRow label="Nombre" value="Selección de fútbol de Ecuador" />
            <InfoRow label="Apodo" value="La Tri / La Tricolor" />
            <InfoRow label="Federación" value="FEF - Federación Ecuatoriana de Fútbol" />
            <InfoRow label="Confederación" value="CONMEBOL" />
            <InfoRow label="Director Técnico" value="Sebastián Beccacece" />
            <InfoRow label="Estadio" value="Estadio Rodrigo Paz Delgado, Quito" />
            <InfoRow label="Capacidad" value="41,575 espectadores" />
            <InfoRow label="Colores" value="🟡 Amarillo / 🔵 Azul" />
          </InfoCard>
        </Animated.View>

        {/* World Cup Card */}
        <Animated.View style={card2Style}>
          <InfoCard title="Participaciones en Mundiales" icon="🏆">
            <InfoRow label="Total" value="4 Mundiales" />
            <InfoRow label="Corea-Japón" value="2002 - Primera fase" />
            <InfoRow label="Alemania" value="2006 - Octavos de final" />
            <InfoRow label="Brasil" value="2014 - Primera fase" />
            <InfoRow label="Catar" value="2022 - Primera fase" />
            <InfoRow label="Mejor resultado" value="Octavos de final (2006)" />
          </InfoCard>
        </Animated.View>

        {/* Achievement Badges */}
        <Animated.View style={[styles.badgesSection, badgesStyle]}>
          <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
            Logros Destacados
          </Text>
          <View style={styles.badgesGrid}>
            <AchievementBadge
              icon="🥇"
              title="Copa América"
              description="4to lugar en 1959 y 1993"
            />
            <AchievementBadge
              icon="⚽"
              title="Mundiales"
              description="4 clasificaciones históricas"
            />
            <AchievementBadge
              icon="🌟"
              title="Ídolos"
              description="Alberto Spencer, Álex Aguinaga, Antonio Valencia"
            />
            <AchievementBadge
              icon="🏟️"
              title="Quito"
              description="Fortaleza en la altitud (2,850 m)"
            />
          </View>
        </Animated.View>

        {/* Fun fact */}
        <View style={[styles.funFactCard, { backgroundColor: Colors[colorScheme].card }]}>
          <Text style={styles.funFactIcon}>💡</Text>
          <Text style={[styles.funFactTitle, { color: EcuadorColors.navyBlue }]}>
            ¿Sabías que?
          </Text>
          <Text style={[styles.funFactText, { color: Colors[colorScheme].text }]}>
            Ecuador fue el primer país en marcar un gol en el Mundial 2022 de Catar, 
            a través de Enner Valencia, quien anotó un doblete en el partido inaugural 
            contra el anfitrión.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: EcuadorColors.navyBlue,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  flagStripe: {
    flexDirection: 'row',
    height: 5,
  },
  stripeSegment: {
    flex: 1,
    height: '100%',
  },
  headerContent: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
  },
  logoGlow: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: EcuadorColors.gold,
    opacity: 0.1,
    top: 50,
  },
  headerLogo: {
    width: 120,
    height: 135,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '600',
    color: EcuadorColors.goldLight,
    letterSpacing: 6,
    marginBottom: 6,
  },
  teamName: {
    fontSize: 28,
    fontWeight: '900',
    color: EcuadorColors.white,
    letterSpacing: 2,
  },
  content: {
    padding: 20,
    paddingTop: 24,
  },
  badgesSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
    letterSpacing: 0.5,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  funFactCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: EcuadorColors.gold,
    borderStyle: 'dashed',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  funFactIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  funFactTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  funFactText: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    opacity: 0.85,
  },
});
