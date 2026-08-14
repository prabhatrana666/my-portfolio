import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  Text,
  Image,
  Linking,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();

  const openPortfolio = () => {
    Linking.openURL('https://prabhatrana.online/');
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#F8FAFC"
      />

      {/* Main Content */}
      <View style={styles.mainContent}>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require('./assets/my_image.png')}
            style={styles.profileImage}
          />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>
              Prabhat Rana
            </Text>

            <Text style={styles.role}>
              Frontend Developer
            </Text>

            <Text style={styles.specialization}>
              React.js • React Native • JavaScript
            </Text>

            <Text style={styles.description}>
              Building modern, scalable & high-performance applications.
            </Text>
          </View>
        </View>

        {/* Coming Soon */}
        <View style={styles.comingSoonContainer}>
          <View style={styles.statusDot} />

          <Text style={styles.comingSoonText}>
            Something amazing is coming soon
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made with ❤️ by
        </Text>

        <Text style={styles.footerName}>
          Prabhat Rana
        </Text>

        <Pressable
          onPress={openPortfolio}
          style={({pressed}) => [
            styles.websiteButton,
            pressed && styles.websitePressed,
          ]}
        >
          <Text style={styles.website}>
            prabhatrana.online
          </Text>
        </Pressable>

        <Text style={styles.footerCopyright}>
          © 2026 Prabhat Rana. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
  },

  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileCard: {
    width: '100%',
    maxWidth: 500,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 24,

    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20,

    elevation: 8,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 20,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },

  role: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 6,
  },

  specialization: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 7,
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6B7280',
  },

  comingSoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 30,

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 30,

    backgroundColor: '#EFF6FF',
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,

    backgroundColor: '#22C55E',

    marginRight: 8,
  },

  comingSoonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
  },

  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
  },

  footerName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginTop: 2,
  },

  websiteButton: {
    marginTop: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },

  websitePressed: {
    opacity: 0.6,
  },

  website: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  footerCopyright: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 6,
  },
});

export default App;