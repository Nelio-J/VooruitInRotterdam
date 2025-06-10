import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import useActiveColors from '@/app/components/activeColorsHook';
import { useNotoSerifFonts } from '@/assets/fonts/NotoSerifFontConfig';
import { Ionicons } from '@expo/vector-icons';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MilestonesStackParamList } from '../components/navigation/types';

type ActivityCompletionScreenNavigationProp = NativeStackNavigationProp<MilestonesStackParamList, 'ActivityCompletionScreen'>;

// const TRANSITION_DURATION = 2000;
// const FADE_IN_DURATION = 500;

export default function ActivityCompletionScreen() {
  const navigation = useNavigation<ActivityCompletionScreenNavigationProp>();
  const activeColors = useActiveColors();
  const [fontsLoaded] = useNotoSerifFonts();

  // console.log("Current nav state:", navigation.getState());

  React.useEffect(() => {
    const Timeout = setTimeout(() => { 
    navigation.popToTop();
  }, 2000);

  return () => clearTimeout(Timeout);
  }, [navigation]);
  

  return (
    <View style={[styles.container, { backgroundColor: activeColors.primary }]}>
      <Animated.View style={[styles.contentWrapper]}>
        <Ionicons name="checkmark-circle-outline" size={80} color={activeColors.background} />
        <Text style={[styles.completionText, { color: activeColors.background }]}>
          Activity Completed!
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  completionText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});