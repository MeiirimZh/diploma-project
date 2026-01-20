import { StyleSheet, View, Text } from "react-native";
import { useWindowDimensions } from "react-native";

import { theme } from "../src/theme";
import AppText from "./AppText";

type Props = {
    content: String;
    title: String;
    date: String;
};

export default function Note({ content, title, date }: Props) {
    const { width, height } = useWindowDimensions();

    return (
        <View style={ {width: (width - 3 * theme.spacing.md) / 2, gap: theme.spacing.md, marginBottom: theme.spacing.md, padding: 5 } } >
            <View style={ styles.content } >
                <AppText style= { styles.text } >{ content }</AppText>
            </View>

            <View style={ styles.desc }>
                <View>
                    <AppText numberOfLines={ 2 } style={ [styles.text, styles.titleText] }>{ title }</AppText>
                </View>
                
                <View>
                    <AppText numberOfLines={ 1 } style={ [styles.text, styles.dateText] }>{ date }</AppText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: theme.colors.bgLight,

        borderRadius: 10,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,

        padding: theme.spacing.md,

        height: 220
    },
    desc: {
        height: 56
    },
    text: {
        fontSize: 14,

        color: theme.colors.text
    },
    titleText: {
        textAlign: 'center',

        fontFamily: theme.fonts.bold,

        color: theme.colors.text
    },
    dateText: {
        textAlign: 'center',

        color: theme.colors.textMuted
    }
});