import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

import { EcuadorColors, Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface SectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  delay: number;
}

function AnimatedSection({ icon, title, children, delay }: SectionProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(delay, withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.section,
        { backgroundColor: Colors[colorScheme].card, borderColor: Colors[colorScheme].cardBorder },
        animatedStyle,
      ]}
    >
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionIcon}>{icon}</Text>
        <Text style={[styles.sectionTitle, { color: Colors[colorScheme].cardTitle }]}>{title}</Text>
      </View>
      <View style={styles.sectionDivider} />
      {children}
    </Animated.View>
  );
}

export default function InformationScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: Colors[colorScheme].background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.flagStripe}>
          <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.yellow }]} />
          <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.flagBlue }]} />
          <View style={[styles.stripeSegment, { backgroundColor: EcuadorColors.red }]} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>INFORMACIÓN</Text>
          <Text style={styles.headerSubtitle}>Historia y datos de La Tri</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Historia */}
        <AnimatedSection icon="📖" title="Historia" delay={100}>
          <Text style={[styles.bodyText, { color: Colors[colorScheme].text }]}>
            La Selección de fútbol de Ecuador es el equipo representativo del país en competiciones 
            internacionales. Es controlada por la Federación Ecuatoriana de Fútbol (FEF), fundada 
            en 1925 y afiliada a la FIFA desde 1926.
          </Text>
          <Text style={[styles.bodyText, { color: Colors[colorScheme].text }]}>
            La selección vivió una transformación histórica a finales de los años 90 y principios 
            de los 2000, cuando bajo la dirección de Hernán Darío Gómez logró la primera 
            clasificación a un Mundial en 2002, marcando un antes y un después en el fútbol 
            ecuatoriano.
          </Text>
        </AnimatedSection>

        {/* Palmarés */}
        <AnimatedSection icon="🏅" title="Palmarés Internacional" delay={250}>
          <View style={styles.timelineContainer}>
            <TimelineItem year="2002" event="🌍 Primera participación mundialista (Corea-Japón)" />
            <TimelineItem year="2006" event="⚽ Octavos de final en Alemania (mejor resultado)" />
            <TimelineItem year="2014" event="🌍 Tercera participación mundialista (Brasil)" />
            <TimelineItem year="2022" event="🏆 Cuarta participación mundialista (Catar)" />
            <TimelineItem year="2024" event="🌟 Cuartos de final en la Copa América" />
          </View>
        </AnimatedSection>

        {/* Leyendas */}
        <AnimatedSection icon="⭐" title="Leyendas" delay={400}>
          <LegendItem
            name="Alberto Spencer"
            description="El 'Cabezón', máximo goleador histórico de la Copa Libertadores con 54 goles. Ícono del fútbol sudamericano."
          />
          <LegendItem
            name="Álex Aguinaga"
            description="'El Maestro', considerado uno de los mejores jugadores ecuatorianos. 109 partidos con la selección."
          />
          <LegendItem
            name="Antonio Valencia"
            description="Capitán histórico del Manchester United y la selección. Símbolo de excelencia ecuatoriana en Europa."
          />
          <LegendItem
            name="Enner Valencia"
            description="Capitán y máximo goleador histórico de la selección. Héroe de los Mundiales 2014 y 2022."
          />
          <LegendItem
            name="Moisés Caicedo"
            description="Joven estrella del Chelsea FC, representante de la nueva generación dorada del fútbol ecuatoriano."
          />
          <LegendItem
            name="William Pacho"
            description="Destacado defensa central que milita en el Paris Saint-Germain (PSG), referente de la zaga y muralla de La Tri en Europa."
          />
        </AnimatedSection>

        {/* Datos curiosos */}
        <AnimatedSection icon="🤓" title="Datos Curiosos" delay={550}>
          <CuriousFact
            fact="Ecuador juega sus partidos de local en Quito, a 2,850 metros sobre el nivel del mar, lo que le otorga una ventaja histórica conocida como 'el factor altura'."
          />
          <CuriousFact
            fact="El apodo 'La Tri' proviene de los tres colores de la bandera ecuatoriana: amarillo, azul y rojo."
          />
          <CuriousFact
            fact="En el Mundial 2006, Ecuador fue el único equipo sudamericano, junto con Argentina y Brasil, en avanzar a la fase eliminatoria."
          />
          <CuriousFact
            fact="El Estadio Rodrigo Paz Delgado, conocido como 'Casa Blanca', es el principal escenario de la selección desde hace décadas."
          />
        </AnimatedSection>
      </View>
    </ScrollView>
  );
}

function TimelineItem({ year, event }: { year: string; event: string }) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineContent}>
        <Text style={styles.timelineYear}>{year}</Text>
        <Text style={[styles.timelineEvent, { color: Colors[colorScheme].text }]}>{event}</Text>
      </View>
    </View>
  );
}

function LegendItem({ name, description }: { name: string; description: string }) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={styles.legendItem}>
      <Text style={[styles.legendName, { color: Colors[colorScheme].cardTitle }]}>{name}</Text>
      <Text style={[styles.legendDescription, { color: Colors[colorScheme].text }]}>
        {description}
      </Text>
    </View>
  );
}

function CuriousFact({ fact }: { fact: string }) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={styles.curiousFact}>
      <Text style={styles.curiousFactBullet}>▸</Text>
      <Text style={[styles.curiousFactText, { color: Colors[colorScheme].text }]}>{fact}</Text>
    </View>
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
    paddingBottom: 24,
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: EcuadorColors.white,
    letterSpacing: 4,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: EcuadorColors.goldLight,
    letterSpacing: 2,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    paddingTop: 24,
  },
  section: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: EcuadorColors.gold,
    opacity: 0.3,
    marginBottom: 14,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
    opacity: 0.85,
  },
  // Timeline
  timelineContainer: {
    gap: 8,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: EcuadorColors.gold,
    marginTop: 5,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYear: {
    fontSize: 14,
    fontWeight: '800',
    color: EcuadorColors.gold,
    marginBottom: 2,
  },
  timelineEvent: {
    fontSize: 13,
    lineHeight: 20,
    opacity: 0.85,
  },
  // Legends
  legendItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(197, 165, 90, 0.15)',
  },
  legendName: {
    fontSize: 15,
    fontWeight: '700',
    color: EcuadorColors.navyBlue,
    marginBottom: 4,
  },
  legendDescription: {
    fontSize: 13,
    lineHeight: 20,
    opacity: 0.8,
  },
  // Curious facts
  curiousFact: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  curiousFactBullet: {
    color: EcuadorColors.gold,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 1,
  },
  curiousFactText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    opacity: 0.85,
  },
});
