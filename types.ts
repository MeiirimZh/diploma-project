import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type TabParamList = {
    Notes: undefined;
    Cards: undefined;
    Tests: undefined;
};

export type NotesScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Notes'>;
export type CardsScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Cards'>;
export type TestsScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Tests'>;