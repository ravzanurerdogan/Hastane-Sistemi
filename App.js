import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RemindersScreen from './src/screens/RemindersScreen';
import DiaryScreen from './src/screens/DiaryScreen';
import SuggestionsScreen from './src/screens/SuggestionsScreen';
import InfoShareScreen from './src/screens/InfoShareScreen';
import NutritionExerciseScreen from './src/screens/NutritionExerciseScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import EducationListScreen from './src/screens/EducationListScreen';
import EducationDetailScreen from './src/screens/EducationDetailScreen';
import colors from './src/theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen} />
        <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
        <Stack.Screen name="InfoShare" component={InfoShareScreen} />
        <Stack.Screen name="NutritionExercise" component={NutritionExerciseScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="EducationList" component={EducationListScreen} />
        <Stack.Screen name="EducationDetail" component={EducationDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}