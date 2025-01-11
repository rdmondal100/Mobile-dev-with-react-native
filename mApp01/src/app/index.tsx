import { View, Text, Button, Alert } from "react-native";
import React from "react";
import NameComponent from "../components/NameComponent";
import FavouriteComponet from "../components/FavouriteComponet";
import AgeComponent from "../components/AgeComponent";
import PressableComponent from "../components/PressableComponent";
import ImageComponent from "../components/ImageComponent";

const index = () => {
	const onPressLearnMore = () => {
        Alert.alert("Learning more")
    };
	return (
		<View>
			<Text>Hello world</Text>
			<NameComponent />
			<AgeComponent />
			<FavouriteComponet />
			<Button
                
				onPress={onPressLearnMore}
				title='Tap Me'
				color="olive"
				accessibilityLabel='Learn more about this purple button'
                
			/>
            <PressableComponent/>
            <ImageComponent/>
		</View>
	);
};

export default index;
