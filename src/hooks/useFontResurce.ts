import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export function useFontResource() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadingFonts() {
      try {
        await Font.loadAsync({
          montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        });
      } catch (error) {
        console.warn(err);
      } finally {
        setIsLoading(true);
      }
    }

    loadingFonts();
  }, []);

  return isLoading;
}
