import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, TouchableOpacity, Image, FlatList, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { GameParams } from "../../@types/navigation";
import { AdCardProps, AdCard } from "../../components/AdCard";
import { Background } from "../../components/Background";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { AdModal } from "../../components/AdModal";

import { styles } from "./styles";

export function Game() {
    const route = useRoute();
    const game = route.params as GameParams;

    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }

    const [ads, setAds] = useState<AdCardProps[]>([]);

    useEffect(() => {
        async function getAdsList() {
            const response = await fetch(
                `http://192.168.0.95:3333/games/${game.id}/ads`
            );
            const data = await response.json();
            setAds(data);
        }

        getAdsList();
    }, []);

    const [selectedAdDiscord, setSelectedAdDiscord] = useState("");
    async function getAdDiscordUser(adId: string) {
        const response = await fetch(
            `http://192.168.0.95:3333/ads/${adId}/discord`
        );
        const data = await response.json();
        setSelectedAdDiscord(data.discord);
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.backIcon} />
                </View>

                <Image
                    source={{ uri: game.boxArtUrl }}
                    resizeMode="cover"
                    style={styles.boxArt}
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList
                    data={ads}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <AdCard
                            data={item}
                            onConnect={() => getAdDiscordUser(item.id)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerList}
                    contentContainerStyle={[
                        ads.length > 0
                            ? styles.contentList
                            : styles.emptyListContent,
                    ]}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados para esse jogo
                        </Text>
                    )}
                />

                <AdModal
                    visible={selectedAdDiscord.length > 0}
                    discord={selectedAdDiscord}
                    onClose={() => setSelectedAdDiscord("")}
                />
            </SafeAreaView>
        </Background>
    );
}
