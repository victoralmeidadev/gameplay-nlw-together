import React, { ReactNode } from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalSignout({ children, closeModal, ...props }: Props) {
  return (
    <Modal transparent animationType="fade" statusBarTranslucent {...props}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>{children}</Background>
        </View>
      </View>
    </Modal>
  );
}
