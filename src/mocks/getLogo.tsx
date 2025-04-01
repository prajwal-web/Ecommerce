/* eslint-disable @typescript-eslint/no-unused-vars */
function getLogo() {
  //https://res.cloudinary.com/dd8im2juc/image/upload/v1740543959/logo-zune_odse5p.svg
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({
        data: {
          logo: {
            bucketId: 'dd8im2juc',
            versionId: 'v1740543959',
            fileName: 'logo-zune_odse5p',
            extension: 'svg'
          }
        }
      });
    }, 1500);
  });
}

export default getLogo;
