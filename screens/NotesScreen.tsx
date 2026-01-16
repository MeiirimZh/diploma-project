import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { NotesScreenNavigationProp } from '../types';

import Search from '../components/Search';

type Props = {
    navigation: NotesScreenNavigationProp;
};

export default function NotesScreen({ navigation }: Props) {
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
            <Text>Заметки</Text>
        </View>
    )
}