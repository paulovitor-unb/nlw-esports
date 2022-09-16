import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GameCardProps, GameCard } from "../../components/GameCard";
import { Background } from "../../components/Background";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([]);

    const navigation = useNavigation();

    function handleOpenGame({ id, title, boxArtUrl }: GameCardProps) {
        navigation.navigate("game", { id, title, boxArtUrl });
    }

    useEffect(() => {
        async function getGamesList() {
            const response = await fetch("http://192.168.0.95:3333/games");
            const data = await response.json();
            setGames(data);
        }

        getGamesList();
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} />
                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />
                <FlatList
                    data={games}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                />
            </SafeAreaView>
        </Background>
    );
}
