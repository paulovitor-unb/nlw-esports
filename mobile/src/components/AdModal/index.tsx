import {
    ModalProps,
    Alert,
    Modal,
    View,
    TouchableOpacity,
    Text,
    ActivityIndicator,
} from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";

import { THEME } from "../../theme";
import { Heading } from "../Heading";

import { styles } from "./styles";

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function AdModal({ discord, onClose, ...rest }: Props) {
    const [isCopying, setIsCopying] = useState(false);

    async function handleCopyDiscordToClipboard() {
        setIsCopying(true);
        await Clipboard.setStringAsync(discord);

        Alert.alert(
            "Discord copiado!",
            "Nome copiado para área de transferência"
        );
        setIsCopying(false);
    }

    return (
        <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeIcon}
                    >
                        <MaterialIcons
                            name="close"
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title="Let´s play!"
                        subtitle="Agora é só começar a jogar!"
                        style={{ marginTop: 24, alignItems: "center" }}
                    />

                    <Text style={styles.label}>Adicione no Discord</Text>

                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordToClipboard}
                        disabled={isCopying}
                    >
                        <Text style={styles.discord}>
                            {isCopying ? (
                                <ActivityIndicator
                                    color={THEME.COLORS.PRIMARY}
                                />
                            ) : (
                                discord
                            )}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
