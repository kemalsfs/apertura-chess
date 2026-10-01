import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aperturachess.app',
  appName: 'Apertura Chess',
  webDir: 'dist',
  plugins: {
    SystemBars: {
      insetsHandling: 'css'
    }
  }
};

export default config;
