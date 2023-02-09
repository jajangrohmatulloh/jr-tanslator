// import Avatar from '@/components/atoms/Avatar';
import Avatar from '@mui/material/Avatar';
import image from '../../../../public/vercel.svg';
function UserDetail() {
  return (
    <div className="absolute right-6 flex items-center justify-center">
      <Avatar src="/vercel.svg" alt="User Detail" />

      <span className="translate-y-1/4 translate-x-1/2 border-4 border-t-8 border-solid border-transparent border-t-white"></span>
    </div>
  );
}

export default UserDetail;
