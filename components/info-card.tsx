import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { EcuadorColors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

interface InfoCardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export function InfoCard({ title, icon, children }: InfoCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const cardBg = Colors[colorScheme].card;
  const cardBorder = Colors[colorScheme].cardBorder;

  return (
    <View style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder }]}>
      <View style={styles.cardHeader}>
        {icon && <Text style={styles.cardIcon}>{icon}</Text>}
        <Text style={[styles.cardTitle, { color: EcuadorColors.navyBlue }]}>{title}</Text>
      </View>
      <View style={styles.cardDivider} />
      <View style={styles.cardContent}>
        {children}
      </View>
    </View>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: InfoRowProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const textColor = Colors[colorScheme].text;

  return (
    <View style={styles.infoRow}>
      <Text style={[styles.infoLabel, { color: EcuadorColors.gold }]}>{label}</Text>
      <Text style={[styles.infoValue, { color: textColor }]}>{value}</Text>
    </View>
  );
}

interface AchievementBadgeProps {
  icon: string;
  title: string;
  description: string;
}

export function AchievementBadge({ icon, title, description }: AchievementBadgeProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const cardBg = Colors[colorScheme].card;

  return (
    <View style={[styles.badge, { backgroundColor: cardBg }]}>
      <Text style={styles.badgeIcon}>{icon}</Text>
      <Text style={[styles.badgeTitle, { color: EcuadorColors.navyBlue }]}>{title}</Text>
      <Text style={[styles.badgeDescription, { color: Colors[colorScheme].text }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardDivider: {
    height: 1,
    backgroundColor: EcuadorColors.gold,
    opacity: 0.3,
    marginBottom: 14,
  },
  cardContent: {
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1.5,
    textAlign: 'right',
  },
  badge: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    width: '48%',
    borderWidth: 1,
    borderColor: EcuadorColors.gold,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  badgeTitle: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 11,
    textAlign: 'center',
    opacity: 0.7,
  },
});
