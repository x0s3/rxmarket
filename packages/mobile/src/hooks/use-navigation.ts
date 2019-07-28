import { useEffect } from 'react';
import { Navigation, Options } from 'react-native-navigation';

export type ModalActions = 'show' | 'dimiss' | 'dismissAll';

export type ScreenActions = 'push' | 'pop' | 'popTo' | 'popToRoot';

function useNavigationComponentDidAppear(
  callback: (event: any) => void,
  componentId: string
) {
  useEffect(() => {
    const subscription = Navigation.events().registerComponentDidAppearListener(
      event => {
        const equalComponentId = event.componentId === componentId;

        if (equalComponentId || !componentId) {
          callback(event);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationComponentDidDisappear(
  callback: (event: any) => void,
  componentId: string
) {
  useEffect(() => {
    const subscription = Navigation.events().registerComponentDidDisappearListener(
      event => {
        const equalComponentId = event.componentId === componentId;

        if (equalComponentId || !componentId) {
          callback(event);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationCommand(
  callback: (name: string, params: any) => void,
  commandName: any
) {
  useEffect(() => {
    const subscription = Navigation.events().registerCommandListener(
      (name, params) => {
        const equalCommandName = name === commandName;

        if (equalCommandName || !commandName) {
          callback(name, params);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationButtonPress(
  callback: (event: any) => void,
  componentId: string,
  buttonId: string
) {
  useEffect(() => {
    const subscription = Navigation.events().registerNavigationButtonPressedListener(
      event => {
        const equalComponentId = event.componentId === componentId;
        const equalButtonId = event.buttonId === buttonId;

        if (equalComponentId && equalButtonId) {
          callback(event);
        } else if (!buttonId && equalComponentId) {
          callback(event);
        } else if (!componentId && equalButtonId) {
          callback(event);
        } else if (!componentId && !buttonId) {
          callback(event);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}

function useNavigationScreen({
  componentId,
  actionType,
  name,
  passProps,
  options
}: {
  componentId: string;
  actionType: ScreenActions;
  name: string;
  passProps?: any;
  options?: Options;
}) {
  switch (actionType) {
    case 'push':
      Navigation.push(componentId, {
        component: {
          name,
          passProps,
          options
        }
      });
      break;
    case 'pop':
      Navigation.pop(componentId, { ...options });
      break;
    case 'popTo':
      Navigation.popTo(componentId, { ...options });
      break;
    case 'popToRoot':
      Navigation.popToRoot(componentId, { ...options });
      break;
  }
}

function useNavigationModal({
  actionType,
  componentId = '',
  name = '',
  options = {}
}: {
  actionType: ModalActions;
  componentId?: string;
  name?: string;
  options?: Options;
}) {
  switch (actionType) {
    case 'show':
      Navigation.showModal({
        component: { name, options }
      });
      break;
    case 'dimiss':
      Navigation.dismissModal(componentId, { ...options });
      break;
    case 'dismissAll':
      Navigation.dismissAllModals({ ...options });
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
