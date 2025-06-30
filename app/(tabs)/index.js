import { Canvas, useFrame } from "@react-three/fiber/native";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

function Box(props) {
  const [active, setActive] = useState(false);
  const mesh = useRef();

  //
  useFrame((state, delta) => {
    if (active) {
      mesh.current.rotation.y += delta;
      mesh.current.rotation.x += delta;
    }
  });
  return (
    <mesh
      scale={active ? 1.3 : 1}
      {...props}
      ref={mesh}
      onClick={(event) => setActive(!active)}
    >
      <boxGeometry />
      <meshStandardMaterial color={active ? "green" : "gray"} />
    </mesh>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Canvas
        onCreated={({ gl }) => {
          gl.setClearColor("white"); // or use '#ffffff'
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <Box position={[0, 2, 0]} />
        <Box position={[0, -2, 0]} />

        <Box />
        <Box />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
