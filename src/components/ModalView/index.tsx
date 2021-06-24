import React, { ReactNode } from "react";
import { View, Modal, ModalProps } from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...props }: Props) {
  return (
    <Modal transparent animationType="slide" {...props}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
