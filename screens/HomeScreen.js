import { View, Text , Button} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'

export default function HomeScreen() {
    const [prediction, setPrediction] = useState('')
  return (
      <Formik
          initialValues = {{sepalLength: '', sepalWidth:'', petalWidth: '', petalLength:''}}
         // onSubmit = { (values) => console.log(values) }
         onSubmit = {values=>
        axios.post('http://127.0.0.1:5000/predict', {
            sepalLength: values.sepalLength, 
            sepalWidth: values.sepalWidth, 
            petalWidth: values.petalWidth, 
            petalLength: values.petalLength
        }).then(response => {console.log(response.data)}).catch(error => console.log(error))
        }
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                  onChangeText={handleChange('sepalLength')}
                  onBlur={handleBlur('sepalLength')}
                  value = {values.sepalLength}
              />
              <TextInput
                  onChangeText={handleChange('sepalWidth')}
                  onBlur={handleBlur('sepalWidth')}
                  value = {values.sepalWidth}
              />
              <TextInput
                  onChangeText={handleChange('petalWidth')}
                  onBlur={handleBlur('petalWidth')}
                  value = {values.petalWidth}
              />
              <TextInput
                  onChangeText={handleChange('petalLength')}
                  onBlur={handleBlur('petalLength')}
                  value = {values.petalLength}
              />
              <Button onPress={handleSubmit} title='Submit'/>
              <Text>the prediction is: {prediction}</Text>
            </View>
        )}
      </Formik>
  )
}