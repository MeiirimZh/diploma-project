import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { TestsScreenNavigationProp } from '../types';

import Search from '../components/Search';

type Props = {
    navigation: TestsScreenNavigationProp;
};

export default function TestsScreen({ navigation }: Props) {
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
            <Text>Тесты</Text>
        </View>
    )
}