import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const UsageScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('chooseLanguage')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UsageScreen;
