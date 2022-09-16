import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: { padding: 32, width: "100%" },
    title: {
        fontFamily: THEME.FONT_FAMILY.BLACK,
        fontSize: THEME.FONT_SIZE.LG,
        color: THEME.COLORS.TEXT,
    },
    subtitle: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.CAPTION_400,
    },
});
