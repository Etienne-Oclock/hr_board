import React, { useState } from "react";
import utilsStorage from "../utils/utils.storage";
import useStore from "../store/store";

import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
  TextInputProps,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const SimpleForm = () => {
  const user = useStore(state => state.user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState({});

  const onSubmit = async (data) => {
    setSubmittedData({...data});
    console.log('data :>> ', data);
    await utilsStorage.storeLocally('name', data.name);
    await utilsStorage.storeLocally('password', data.password)
    console.log('submittedData :>> ', submittedData);
    user.setUserName(data.name);
    console.log('user :>> ', user);
    
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Controller
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Your Name"
            />
          )}
          name="name"
          rules={{ required: "You must enter a name" }}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        <Controller
          defaultValue={""}
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="password"
            />
          )}
          name="password"
          rules={{required: "Enter a password"}}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        <Pressable title="Submit" onPress={handleSubmit(onSubmit)} ><Text>Touch ?</Text></Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SimpleForm;
