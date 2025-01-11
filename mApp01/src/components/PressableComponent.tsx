import { View, Text, Pressable } from "react-native";
import React from "react";

const PressableComponent = () => {
	return <View>
        <Pressable onPressIn={()=>{
            alert("I am just pressed")
        }}>
            <Text>Touch Me</Text>
        </Pressable>
        
        

        <Pressable onPressOut={()=>{
            alert("I was  pressed")
        }}>
            <Text>Touch Me</Text>
        </Pressable>

        <Pressable onLongPress={()=>{
            alert("I was presslong")
        }}>
            <Text>Long press Me</Text>
        </Pressable>
    </View>;
};

export default PressableComponent;
