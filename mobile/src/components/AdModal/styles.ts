import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: THEME.COLORS.OVERLAY,
    },
    content: {
        width: 311,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
    },
    closeIcon: { margin: 16, alignSelf: "flex-end" },
    label: {
        marginTop: 24,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
    },
    discordButton: {
        marginTop: 8,
        width: 231,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        borderRadius: 4,
        marginBottom: 32,
    },
    discord: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
    },
});
