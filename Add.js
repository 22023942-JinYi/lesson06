import React from 'react';
import {StatusBar, TextInput, Button, StyleSheet, Text, View,} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from "./Data";

const Add = ({ navigation }) => {
    const [letter, setLetter] = React.useState('');
    const [type, setType] = React.useState('');

    return(
    <View>

        <Text>Add Letter :< /Text>
        <TextInput
            placeholder="Enter a letter"
            maxLength={1} style={{borderWidth:1}}
            onChangeText={(text)=>setLetter(text) }/>
        <RNPickerSelect
            itemKey={type}
            onValueChange={ (value)=>setType (value)}
            items={[
                {label: "Vowels", value: "Vowels", key: "Vowels"},
                {label: "Consonants", value: "Consonants", key: "Consonants"}

                ]}

        />
        <Button title='Submit'
                onPress={ ()=> {
                    let item = {key: letter};
                    let indexnum = 1;
                    if (type == "Vowels") {
                        indexnum = 0;
                    }

                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home")
                }}
                />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textinput: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
    },
});

export default Add;
