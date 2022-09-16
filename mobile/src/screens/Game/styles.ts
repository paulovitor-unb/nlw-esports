import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        marginTop: 10,
        paddingHorizontal: 32,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: { width: 72, height: 41 },
    backIcon: { width: 20, height: 20 },
    boxArt: {
        marginTop: 10,
        width: 311,
        height: 80,
        borderRadius: 8,
    },
    containerList: { width: "100%" },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: "flex-start",
    },
    emptyListContent: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    emptyListText: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.CAPTION_300,
    },
});
