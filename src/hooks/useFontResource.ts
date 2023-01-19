import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export function useFontResource() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadingFonts() {
      try {
        await Font.loadAsync({
          montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        });
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(true);
      }
    }

    loadingFonts();
  }, []);

  return isLoading;
}
