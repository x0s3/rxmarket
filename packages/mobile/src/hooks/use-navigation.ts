import { useEffect } from 'react';
import { Navigation, Options } from 'react-native-navigation';

export type ModalActions = 'show' | 'dimiss' | 'dismissAll';

export type ScreenActions = 'push' | 'pop' | 'popTo' | 'popToRoot';

function useNavigationComponentDidAppear(
  handler: (T: any) => void,
  componentId: string
) {
  useEffect(() => {
    const subscription = Navigation.events().registerComponentDidAppearListener(
      event => {
        const equalComponentId = event.componentId === componentId;

        if (equalComponentId || !componentId) {
          handler(event);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationComponentDidDisappear(
  handler: (T: any) => void,
  componentId: string
) {
  useEffect(() => {
    const subscription = Navigation.events().registerComponentDidDisappearListener(
      event => {
        const equalComponentId = event.componentId === componentId;

        if (equalComponentId || !componentId) {
          handler(event);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationCommand(
  handler: (name: string, params: any) => void,
  commandName: any
) {
  useEffect(() => {
    const subscription = Navigation.events().registerCommandListener(
      (name, params) => {
        const equalCommandName = name === commandName;

        if (equalCommandName || !commandName) {
          handler(name, params);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationButtonPress(
  handler: (event: any) => void,
  componentId: string,
  buttonId: string
) {
  useEffect(() => {
    const subscription = Navigation.events().registerNavigationButtonPressedListener(
      event => {
        const equalComponentId = event.componentId === componentId;
        const equalButtonId = event.buttonId === buttonId;

        if (equalComponentId && equalButtonId) {
          handler(event);
        } else if (!buttonId && equalComponentId) {
          handler(event);
        } else if (!componentId && equalButtonId) {
          handler(event);
        } else if (!componentId && !buttonId) {
          handler(event);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationScreen({
  actionType,
  screenName,
  options
}: {
  actionType: ScreenActions;
  screenName: string;
  options: Options;
}) {
  switch (actionType) {
    case 'push':
      break;
    case 'pop':
      break;
    case 'popTo':
      break;
    case 'popToRoot':
      break;
    default:
      break;
  }
}

function useNavigationModal({
  actionType,
  options
}: {
  options: Options;
  actionType: ModalActions;
}) {
  switch (actionType) {
    case 'show':
      Navigation.showModal({});
      break;
    case 'dimiss':
      Navigation.showModal({});
      break;
    case 'dismissAll':
      Navigation.showModal({});
      break;
  }
}

export {
  useNavigationComponentDidAppear,
  useNavigationComponentDidDisappear,
  useNavigationCommand,
  useNavigationButtonPress,
  useNavigationScreen,
  useNavigationModal
};
