import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        padding: 20,
        width: 200,
        alignItems: "center",
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
    },
    button: {
        width: "100%",
        height: 36,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: 6,
    },
    buttonText: {
        marginLeft: 8,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT,
    },
});
