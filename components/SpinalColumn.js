import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

function SpinalColumnModel(props) {
  const group = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(null);

  useEffect(() => {
    console.log('SpinalColumnModel mounted');
  }, []);

  const { nodes, materials } = useGLTF('/models/3d_spinal_column.glb', undefined, (error) => {
    console.error('Error loading model:', error);
    setModelError(error);
  });

  useEffect(() => {
    if (nodes && materials) {
      console.log('Model loaded successfully');
      setModelLoaded(true);
    }
  }, [nodes, materials]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  if (modelError) {
    return <ErrorMessage error={modelError} />;
  }

  if (!modelLoaded) {
    return <FallbackComponent />;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      {Object.keys(nodes).map((nodeName) => {
        const node = nodes[nodeName];
        if (node.isMesh) {
          return (
            <mesh
              key={nodeName}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={node.material}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

function FallbackComponent() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function ErrorMessage({ error }) {
  return (
    <div style={{ color: 'red', position: 'absolute', top: 0, left: 0, padding: '10px' }}>
      Error loading model: {error.message}
    </div>
  );
}

export default function SpinalColumn() {
  return (
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={<FallbackComponent />}>
            <SpinalColumnModel />
          </Suspense>
          <OrbitControls />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}

useGLTF.preload('/models/3d_spinal_column.glb', 
  (gltf) => {
    console.log('Model preloaded successfully:', gltf);
  },
  (error) => {
    console.error('Error preloading model:', error);
  }
);