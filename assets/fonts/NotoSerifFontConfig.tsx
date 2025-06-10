import {
    NotoSerif_100Thin,
    NotoSerif_100Thin_Italic,
    NotoSerif_200ExtraLight,
    NotoSerif_200ExtraLight_Italic,
    NotoSerif_300Light,
    NotoSerif_300Light_Italic,
    NotoSerif_400Regular,
    NotoSerif_400Regular_Italic,
    NotoSerif_500Medium,
    NotoSerif_500Medium_Italic,
    NotoSerif_600SemiBold,
    NotoSerif_600SemiBold_Italic,
    NotoSerif_700Bold,
    NotoSerif_700Bold_Italic,
    NotoSerif_800ExtraBold,
    NotoSerif_800ExtraBold_Italic,
    NotoSerif_900Black,
    NotoSerif_900Black_Italic,
} from '@expo-google-fonts/noto-serif';
import { useFonts } from '@expo-google-fonts/noto-serif/useFonts';

export function useNotoSerifFonts() {
  return useFonts({
    NotoSerif_100Thin,
    NotoSerif_200ExtraLight,
    NotoSerif_300Light,
    NotoSerif_400Regular,
    NotoSerif_500Medium,
    NotoSerif_600SemiBold,
    NotoSerif_700Bold,
    NotoSerif_800ExtraBold,
    NotoSerif_900Black,
    NotoSerif_100Thin_Italic,
    NotoSerif_200ExtraLight_Italic,
    NotoSerif_300Light_Italic,
    NotoSerif_400Regular_Italic,
    NotoSerif_500Medium_Italic,
    NotoSerif_600SemiBold_Italic,
    NotoSerif_700Bold_Italic,
    NotoSerif_800ExtraBold_Italic,
    NotoSerif_900Black_Italic,
  });
}
