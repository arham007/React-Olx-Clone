import { Image } from 'antd';

function ImgView({src}) {
  return (
    <Image
      width={350}
      src={src}
    />
  );
}

export default ImgView;


