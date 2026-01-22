import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { CardsScreenNavigationProp } from '../types';

import Search from '../components/Search';
import CardsSet from '../components/CardsSet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../src/theme';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation: CardsScreenNavigationProp;
};

export default function CardsScreen({ navigation }: Props) {
    const insets = useSafeAreaInsets();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Search onPress={() => {} } />
            ),
            headerRightContainerStyle: { 
                paddingRight: 10 
            }
        });
    }, [navigation]);

    const cardsSet = [
        {title: 'Английский язык', totalCardsCount: 130, key: '1'},
        {title: 'Математика', totalCardsCount: 54, key: '2'},
        {title: 'Биология', totalCardsCount: 61, key: '3'},
        {title: 'Физика', totalCardsCount: 103, key: '4'},
        {title: 'Химия', totalCardsCount: 80, key: '5'}
    ];

    return (
        <View style={ styles.main }>
            <FlatList showsVerticalScrollIndicator={ false }
                data={ cardsSet } 
                renderItem={({ item }) => (
                    <CardsSet title={ item.title } totalCardsCount={ item.totalCardsCount }
                        onPressMain={() => console.log("Main")}
                        onPressReview={() => console.log("Review")} 
                        onPressPractice={() => console.log("Practice")} />
                )}
                ItemSeparatorComponent={() => <View style={ {height: theme.spacing.md} } />}
            />

            <View style={ [styles.floatingActions, {bottom: insets.bottom - theme.spacing.md}] } >
                <TouchableOpacity style={ styles.floatingActionsButton } >
                    <Ionicons name="add" size={ 24 } />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: theme.spacing.md
    },

    floatingActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,

        width: 50,

        position: 'absolute',
        right: theme.spacing.md,
    },
    floatingActionsButton: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: theme.colors.bgLight,

        borderRadius: 25,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,

        width: 50,
        height: 50
    }
});