import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Physics, Triplet, useBox, usePlane } from '@react-three/cannon';
import { BufferGeometry, Material, Mesh } from 'three';

const Box = (props: any) => {
	const [ref, api] = useBox<Mesh<BufferGeometry, Material>>(() => ({ mass: 0.5, position: [0, 5, 0], ...props }));

	return (
		<mesh
			onClick={() => {
				api.velocity.set(0, 10, 0);
			}}
			position={[0, 5, 0]}
			ref={ref}
		>
			<sphereBufferGeometry attach='geometry' args={[5, 32, 16]} />
			<meshStandardMaterial color='sandybrown' attach='material' />
		</mesh>
	);
};

const Plane = (props: any) => {
	const rotation: Triplet = [-Math.PI / 2, 0, 0];
	const [ref] = usePlane<Mesh<BufferGeometry, Material>>(() => ({ rotation, ...props }));
	return (
		<mesh position={[0, 0, 0]} ref={ref} rotation={rotation}>
			<planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshLambertMaterial color='azure' attach='material' />
		</mesh>
	);
};

export default function Home() {
	return (
		<main className='w-full h-screen'>
			<Canvas className='w-full h-full'>
				<color attach='background' args={['#000']} />
				<OrbitControls />
				<Sky />
				<ambientLight intensity={0.8} />
				<spotLight position={[10, 20, 2]} angle={0.2} />
				<Physics>
					<Plane />
					<Box />
				</Physics>
			</Canvas>
		</main>
	);
}
