import { StyleSheet, View, Text } from "react-native";
import { useWindowDimensions } from "react-native";

import { theme } from "../src/theme";
import AppText from "./AppText";

export default function Note() {
    const { width, height } = useWindowDimensions();

    return (
        <View style={ {width: (width - 3 * theme.spacing.md) / 2, gap: theme.spacing.sm } } >
            <View style={ styles.content } >
                <AppText style= { styles.text } >Lorem ipsum dolor sit amet consectetur adisciping elit</AppText>
            </View>

            <View style={ styles.desc } >
                <View>
                    <AppText numberOfLines={2} style={ [styles.text, styles.titleText] }>Термодинамика</AppText>
                </View>
                
                <View>
                    <AppText style={ [styles.text, styles.dateText] }>19 декаб.</AppText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: theme.colors.bgLight,

        borderRadius: 10,

        padding: theme.spacing.xs,

        height: 220
    },
    desc: {

    },
    text: {
        fontSize: 14
    },
    titleText: {
        textAlign: 'center',

        fontWeight: 'bold',

        color: theme.colors.text
    },
    dateText: {
        textAlign: 'center',

        color: theme.colors.textMuted
    }
});