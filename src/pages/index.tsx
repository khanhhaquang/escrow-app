import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Box = () => {
	return (
		<mesh>
			<sphereGeometry attach='geometry' />
			<meshStandardMaterial color='sandybrown' attach='material' />
		</mesh>
	);
};

export default function Home() {
	return (
		<main className='w-full h-screen'>
			<Canvas className='w-full h-full'>
				<color attach='background' args={['#000']} />
				<OrbitControls />
				<Stars />
				<ambientLight intensity={0.8} />
				<spotLight position={[10, 10, 5]} angle={0.2} />
				<Box />
			</Canvas>
		</main>
	);
}
