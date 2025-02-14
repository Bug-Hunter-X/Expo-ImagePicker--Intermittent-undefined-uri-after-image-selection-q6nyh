```javascript
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    if (result.uri === undefined) {
      console.error('ImagePicker returned undefined uri');
      // Handle the error gracefully. For instance, display a user-friendly message
      alert('Error picking image. Please try again.');
    } else {
      // Process the image using result.uri
      console.log(result.uri);
    }
  }
};
```