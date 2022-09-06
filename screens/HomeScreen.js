import { View, Text , Button} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'

export default function HomeScreen() {
  return (
      <Formik
          initialValues = {{email: ''}}
          onSubmit = { (values) => console.log(values) }
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value = {values.email}
              />
              <Button onPress={handleSubmit} title='Submit'/>
            </View>
        )}
      </Formik>
  )
}