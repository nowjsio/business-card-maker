const cloudinaryConfig = {
  cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || '',
};

class Cloudinay {
  upload = async file => {
    const uploadURL = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'w2xocy9z');
    let json;
    try {
      const result = await fetch(uploadURL, {
        method: 'post',
        body: formData,
      });
      json = result.json();
    } catch (e) {
      console.error(e);
    }
    return json;
  };
}

export default Cloudinay;
