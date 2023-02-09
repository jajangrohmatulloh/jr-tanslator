import Image from 'next/image';

function Avatar() {
  return (
    <Image
      className="rounded-full"
      src="/favicon.ico"
      alt="avatar"
      width={24}
      height={24}
    ></Image>
  );
}

export default Avatar;
