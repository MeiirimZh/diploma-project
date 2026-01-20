import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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

    const notes = [
        {content: 'Lorem ipsum', title: 'Термодинамика', date: '20 декаб.', key: '1'},
        {content: 'Lorem ipsum', title: 'Линейная алгебра', date: '21 декаб.', key: '2'},
        {content: 'Lorem ipsum', title: 'Биология', date: '22 декаб.', key: '3'},
        {content: 'Lorem ipsum', title: 'Геофизика', date: '23 декаб.', key: '4'},
        {content: 'Lorem ipsum', title: 'Математика', date: '24 декаб.', key: '5'},
        {content: 'Lorem ipsum', title: 'Казахский язык', date: '25 декаб.', key: '6'}
    ];

    return (
        <View style={ styles.main } >
            <FlatList showsVerticalScrollIndicator={ false }
                data={ notes } numColumns={ 2 } columnWrapperStyle={{gap: theme.spacing.md}}
                renderItem={({ item }) => (
                    <Note content={ item.content } title={ item.title } date={ item.date } />
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: theme.spacing.md
    }
});