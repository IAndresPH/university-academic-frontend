import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const customTheme = {
  dark: false,
  colors: {
    primary: '#1e6fb8',
    secondary: '#0f3b66',
    background: '#f5f8fb',
    surface: '#ffffff',
    error: '#ef4444',
    success: '#16a34a',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});
