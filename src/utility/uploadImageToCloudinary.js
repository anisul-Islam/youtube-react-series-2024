export const uploadImageToCloduinary = async (file) => {
  const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  // console.log(cloudinaryCloudName);
  // console.log(cloudinaryPreset);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryPreset);
  formData.append('folder', 'user-mgt-app');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
