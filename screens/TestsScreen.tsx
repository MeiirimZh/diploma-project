import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TestsScreenNavigationProp } from '../types';

import Search from '../components/Search';
import Test from '../components/Test';

import { theme } from '../src/theme';

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
        <View style={ styles.main } >
            <Test title="Python" totalQuestionsCount={ 25 } lastResult={ 100 }
                onPressMain={() => console.log("Main")}
                onPressStart={() => console.log("Start")} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: theme.spacing.md
    }
});