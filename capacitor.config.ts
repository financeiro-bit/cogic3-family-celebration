import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.935556f3a36944ebb67bd83a437c6a64',
  appName: 'cogic3-family-celebration',
  webDir: 'dist',
  server: {
    url: 'https://935556f3-a369-44eb-b67b-d83a437c6a64.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#8B4513',
      showSpinner: false
    }
  }
};

export default config;