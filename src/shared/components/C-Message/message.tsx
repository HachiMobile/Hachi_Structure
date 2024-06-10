import React, { useEffect } from 'react';
import { Alert, Text, View, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

const requestUserPermission = async (): Promise<void> => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  } catch (error) {
    console.error('Failed to request permission', error);
  }
};

const getFCMToken = async (): Promise<void> => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
  } catch (error) {
    console.error('Failed to get FCM token', error);
  }
};

const displayNotification = async (title: string, body: string): Promise<void> => {
  try {
    if (Platform.OS === 'android') {
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });
    }

    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: 'default',
      },
    });
  } catch (error) {
    console.error('Failed to display notification', error);
  }
};

const onMessageListener = () => {
  return messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
};

const useFirebaseMessaging = (): void => {
  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      await requestUserPermission();
      await getFCMToken();
      const unsubscribe = onMessageListener();

      // Handle background messages
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        await displayNotification(
          remoteMessage.notification?.title ?? 'Notification',
          remoteMessage.notification?.body ?? 'You have a new message'
        );
      });

      return unsubscribe;
    };

    initializeFirebaseMessaging().then(unsubscribe => {
      if (unsubscribe) {
        return unsubscribe;
      }
    }).catch(error => console.error('Failed to initialize Firebase Messaging', error));
  }, []);
};

const FireBaseMessage: React.FC = () => {
  useFirebaseMessaging();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Firebase Notifications with React Native</Text>
    </View>
  );
};

export default FireBaseMessage;
