import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CardsScreenNavigationProp } from '../types';

import Search from '../components/Search';
import CardsSet from '../components/CardsSet';

import { theme } from '../src/theme';

type Props = {
    navigation: CardsScreenNavigationProp;
};

export default function CardsScreen({ navigation }: Props) {
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

    return (
        <View style={ styles.main }>
            <CardsSet title={ "Английский язык" } totalCardsCount={ 10 } />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: theme.spacing.md
    }
});