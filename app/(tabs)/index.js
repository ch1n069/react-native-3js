import { Canvas } from "@react-three/fiber/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

function Box(props) {
  const [active, setActive] = useState(false);
  return (
    <mesh
      scale={active ? 1.3 : 1}
      {...props}
      onClick={(event) => setActive(!active)}
    >
      <boxGeometry />
      <meshStandardMaterial color={active ? "green" : "orange"} />
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
