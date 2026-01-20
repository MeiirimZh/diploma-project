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
        <View style={ {width: (width - 3 * theme.spacing.md) / 2, gap: theme.spacing.sm } } >
            <View style={ styles.content } >
                <AppText style= { styles.text } >{ content }</AppText>
            </View>

            <View>
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

        padding: theme.spacing.xs,

        height: 220
    },
    text: {
        fontSize: 14
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