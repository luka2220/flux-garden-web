import { useNavigate } from 'react-router';

export default function Nav() {
  const navigate = useNavigate();
  const home = () => navigate('/');

  return (
    <div className="cursor-pointer" onClick={home}>
      <p className="text-2xl text-flux-brown px-6 py-4 mb-10">Flux Garden</p>
    </div>
  );
}
