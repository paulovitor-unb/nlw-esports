import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: { marginRight: 24 },
    cover: {
        width: 240,
        height: 320,
        justifyContent: "flex-end",
        borderRadius: 8,
        overflow: "hidden",
    },
    footer: {
        padding: 16,
        width: "100%",
        height: 102,
        justifyContent: "flex-end",
    },
    name: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
    },
    ads: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.CAPTION_300,
    },
});
