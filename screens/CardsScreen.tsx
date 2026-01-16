import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { CardsScreenNavigationProp } from '../types';

import Search from '../components/Search';

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
        <View>
            <Text>Карточки</Text>
        </View>
    )
}