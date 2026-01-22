import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import { theme } from "../src/theme";

type Props = {
    title: string;
    totalCardsCount: number;
    onPressMain: () => void;
    onPressReview: () => void;
    onPressPractice: () => void;
};

export default function CardsSet({ title, totalCardsCount, onPressMain, onPressReview, onPressPractice }: Props) {
    const { width, height } = useWindowDimensions();

    const getInfoTextWidth = () => {
        return width - theme.spacing.md * 5 - 24;
    };

    const totalCardsCountFormatted = `Количество карточек: ${totalCardsCount}`;

    return (
        <View style={ {width: width - theme.spacing.md * 2, padding: theme.spacing.sm } }>
            <TouchableOpacity onPress={ onPressMain } style={ styles.main }>
                <View style={ styles.info } >
                    <View style={ {width: getInfoTextWidth()} } >
                        <AppText numberOfLines={ 2 } style={ styles.titleText }>
                            { title }
                        </AppText>
                        <AppText numberOfLines={ 1 } style={ styles.totalCardsCountText } >
                            { totalCardsCountFormatted }
                        </AppText>
                    </View>

                    <TouchableOpacity onPress={ () => {} } >
                        <Ionicons name="ellipsis-vertical" size={ 24 } color={ theme.colors.text } />
                    </TouchableOpacity>
                </View>

                <View style={ styles.actions } >
                    <View style={ styles.actionsStudy } >
                        <TouchableOpacity style={ styles.actionsStudyButton } onPress={ onPressReview } >
                            <AppText style={ styles.actionsStudyButtonText } >ОБЗОР</AppText>
                        </TouchableOpacity>

                        <TouchableOpacity style={ styles.actionsStudyButton } onPress={ onPressPractice } >
                            <AppText style={ styles.actionsStudyButtonText } >ПРАКТИКА</AppText>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Ionicons name="share-social" size={ 24 } color={ theme.colors.text } />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: theme.colors.bgLight,

        borderRadius: 10,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,

        padding: theme.spacing.md
    },

    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: theme.spacing.md,
        
        height: 56
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionsStudy: {
        flexDirection: 'row',
        gap: theme.spacing.md,
    },
    actionsStudyButton: {
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.primary,
        borderRadius: 15,

        color: theme.colors.primary,

        paddingHorizontal: theme.spacing.md,

        height: 30
    },
    actionsStudyButtonText: {
        fontSize: 12,

        color: theme.colors.primary
    },

    titleText: {
        fontFamily: theme.fonts.bold,
        fontSize: 14,

        color: theme.colors.text
    },
    totalCardsCountText: {
        fontSize: 14,

        color: theme.colors.textMuted
    }
});