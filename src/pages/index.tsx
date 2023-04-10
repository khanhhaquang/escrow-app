import { Canvas } from '@react-three/fiber';
export default function Home() {
	return (
		<main className='flex h-screen p-0'>
			<Canvas className='w-full h-full'>
				<color attach='background' args={['lightblue']} />
				<ambientLight intensity={0.2} />
				<directionalLight position={[10, 10, 5]} intensity={1} />

				<mesh>
					<sphereGeometry args={[1, 2, 2]} attach='geometry' />
					<meshStandardMaterial color={0xffff00} attach='material' />
				</mesh>
			</Canvas>
		</main>
	);
}
