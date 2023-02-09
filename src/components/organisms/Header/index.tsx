import Title from '@/components/atoms/Title';
import UserDetail from '@/components/molecules/UserDetail';

export default function Header() {
  return (
    <header className="justify flex h-16 w-full items-center justify-center bg-secondary font-hack">
      <Title />
      <UserDetail />
    </header>
  );
}
