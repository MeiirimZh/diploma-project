import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NotesScreenNavigationProp } from '../types';
import { theme } from '../src/theme';

import Search from '../components/Search';
import Note from '../components/Note';

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
        <View style={ styles.main } >
            <Note />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: theme.spacing.md
    }
});