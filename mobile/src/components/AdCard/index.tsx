import { View, TouchableOpacity, Text } from "react-native";
import { GameController } from "phosphor-react-native";

import { AdInfo } from "../AdInfo";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface AdCardProps {
    id: string;
    name: string;
    yearsPlaying: number;
    weekDays: string[];
    hourStart: string;
    hourEnd: string;
    useVoiceChannel: boolean;
}

interface Props {
    data: AdCardProps;
    onConnect: () => void;
}

export function AdCard({ data, onConnect }: Props) {
    return (
        <View style={styles.container}>
            <AdInfo label="Nome" value={data.name} />
            <AdInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
            <AdInfo
                label="Disponibilidade"
                value={`${
                    data.weekDays.length
                } dias \u2022 ${data.hourStart.slice(
                    0,
                    2
                )}h - ${data.hourEnd.slice(0, 2)}h`}
            />
            <AdInfo
                label="Chamada de aúdio?"
                value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={
                    data.useVoiceChannel
                        ? THEME.COLORS.SUCCESS
                        : THEME.COLORS.ALERT
                }
            />
            <TouchableOpacity style={styles.button} onPress={onConnect}>
                <GameController color={THEME.COLORS.TEXT} size={20} />
                <Text style={styles.buttonText}>Conectar</Text>
            </TouchableOpacity>
        </View>
    );
}
