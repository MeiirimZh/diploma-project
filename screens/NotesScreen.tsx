import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { NotesScreenNavigationProp } from '../types';
import { theme } from '../src/theme';

import Search from '../components/Search';
import Note from '../components/Note';
import AppText from '../components/AppText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";

type Props = {
    navigation: NotesScreenNavigationProp;
};

export default function NotesScreen({ navigation }: Props) {
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

    const notes = [
        {content: 'Lorem ipsum', title: 'Термодинамика', date: '20 декаб.', key: '1'},
        {content: 'Lorem ipsum', title: 'Линейная алгебра: основы', date: '21 декаб.', key: '2'},
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

            <TouchableOpacity style={ [styles.addNote, {bottom: insets.bottom - theme.spacing.md}] }>
                <Ionicons name="add" size={ 24 } />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: theme.spacing.md
    },
    addNote: {
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        right: 20,

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