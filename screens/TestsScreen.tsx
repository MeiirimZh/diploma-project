import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { TestsScreenNavigationProp } from '../types';

import Search from '../components/Search';
import Test from '../components/Test';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../src/theme';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation: TestsScreenNavigationProp;
};

export default function TestsScreen({ navigation }: Props) {
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

    const tests = [
        {title: 'Python', totalQuestionsCount: 10, lastResult: 100, key: '1'},
        {title: 'Java', totalQuestionsCount: 20, lastResult: 80, key: '2'},
        {title: 'C#', totalQuestionsCount: 30, lastResult: 63, key: '3'},
        {title: 'JavaScript', totalQuestionsCount: 40, lastResult: 50, key: '4'},
        {title: 'C++', totalQuestionsCount: 50, lastResult: 70, key: '5'},
        {title: 'Dart', totalQuestionsCount: 60, lastResult: 80, key: '6'}
    ];

    return (
        <View style={ styles.main } >
            <FlatList showsVerticalScrollIndicator={ false }
                data={ tests }
                renderItem={({ item }) => (
                    <Test title={ item.title } totalQuestionsCount={ item.totalQuestionsCount } lastResult={ item.lastResult }
                        onPressMain={() => console.log("Main")} onPressStart={() => console.log("Start")} />
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