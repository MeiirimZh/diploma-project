import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../src/theme";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FloatingActions({ children }: React.PropsWithChildren<{}>) {
    const insets = useSafeAreaInsets();

    return (
        <View style={ [styles.main, {bottom: insets.bottom - theme.spacing.md}] } >
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
        
        position: 'absolute',
        right: theme.spacing.md,
    }
});