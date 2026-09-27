import { useEffect, useRef } from "react";
import * as THREE from "three";
import cartoonImg from "../assets/devesh-cartoon.jpg";

const Cartoon3DAvatar = ({ className = "" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 460;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master 3D Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Card Group for tilting & bobbing
    const cardGroup = new THREE.Group();
    masterGroup.add(cardGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(cartoonImg);
    if ("colorSpace" in texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
    }

    const cardSize = 2.6;
    const cardDepth = 0.08;

    // 1. Front Mesh with 3D Cartoon Avatar Texture
    const frontGeo = new THREE.PlaneGeometry(cardSize, cardSize, 32, 32);
    const frontMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.3,
      metalness: 0.15,
      emissive: 0x0284c7,
      emissiveIntensity: 0.08,
    });
    const frontMesh = new THREE.Mesh(frontGeo, frontMat);
    frontMesh.position.z = cardDepth / 2 + 0.005;
    cardGroup.add(frontMesh);

    // 2. 3D Body/Backplate of the Card
    const boxGeo = new THREE.BoxGeometry(cardSize + 0.06, cardSize + 0.06, cardDepth);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.8,
    });
    const boxMesh = new THREE.Mesh(boxGeo, boxMat);
    cardGroup.add(boxMesh);

    // 3. Glowing Cyber Wireframe Border
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    cardGroup.add(edgesMesh);

    // 4. Backplate
    const backGeo = new THREE.PlaneGeometry(cardSize, cardSize);
    const backMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.4,
      metalness: 0.9,
    });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -(cardDepth / 2 + 0.005);
    backMesh.rotation.y = Math.PI;
    cardGroup.add(backMesh);

    // 5. Orbiting 3D Cyber Rings
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.016, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.7;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.2;
    masterGroup.add(ring2);

    // 5b. Orbiting 3D Crystal Nodes
    const crystalGeo = new THREE.OctahedronGeometry(0.12, 0);
    const crystalMat1 = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.8,
    });
    const crystal1 = new THREE.Mesh(crystalGeo, crystalMat1);
    masterGroup.add(crystal1);

    const crystalMat2 = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x9333ea,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.8,
    });
    const crystal2 = new THREE.Mesh(crystalGeo, crystalMat2);
    masterGroup.add(crystal2);

    // 5c. Cyber Hologram Base Pedestal
    const baseGeo = new THREE.RingGeometry(1.4, 1.8, 48);
    const baseMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.rotation.x = Math.PI / 2;
    baseMesh.position.y = -1.65;
    masterGroup.add(baseMesh);

    // 6. Floating Particles around the Avatar
    const particleCount = 55;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4.4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(3, 4, 4);
    scene.add(dirLight);

    // Dynamic light following cursor
    const mouseLight = new THREE.PointLight(0x38bdf8, 3.5, 10);
    mouseLight.position.set(0, 0, 3);
    scene.add(mouseLight);

    const purpleLight = new THREE.PointLight(0xc084fc, 2.5, 8);
    purpleLight.position.set(-3, -2, 2);
    scene.add(purpleLight);

    // Mouse / Touch Interaction
    let isDragging = false;
    let hasMovedMuch = false;
    let prevMouse = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseNormX = 0;
    let mouseNormY = 0;

    const onMouseMoveDoc = (e) => {
      mouseNormX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNormY = -(e.clientY / window.innerHeight) * 2 + 1;

      mouseLight.position.x = mouseNormX * 3;
      mouseLight.position.y = mouseNormY * 3;

      if (!isDragging) {
        targetRotationY = mouseNormX * 0.38;
        targetRotationX = -mouseNormY * 0.25;
      }
    };

    const onPointerDown = (e) => {
      isDragging = true;
      hasMovedMuch = false;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const y = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      prevMouse = { x, y };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const y = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const dx = x - prevMouse.x;
      const dy = y - prevMouse.y;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasMovedMuch = true;
      }

      dragVelocity.y = dx * 0.007;
      dragVelocity.x = dy * 0.007;

      targetRotationY += dragVelocity.y;
      targetRotationX += dragVelocity.x;

      prevMouse = { x, y };
    };

    const onPointerUp = () => {
      // If user tapped without dragging, trigger an interactive spin flip!
      if (isDragging && !hasMovedMuch) {
        dragVelocity.y = 0.28;
      }
      isDragging = false;
    };

    window.addEventListener("mousemove", onMouseMoveDoc, { passive: true });
    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    dom.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Inertia when not dragging
      if (!isDragging) {
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;
        targetRotationX += dragVelocity.x;
        targetRotationY += dragVelocity.y;
      }

      masterGroup.rotation.y = THREE.MathUtils.lerp(masterGroup.rotation.y, targetRotationY, 0.08);
      masterGroup.rotation.x = THREE.MathUtils.lerp(masterGroup.rotation.x, targetRotationX, 0.08);

      // Subtle breathing float bobbing
      cardGroup.position.y = Math.sin(time * 1.6) * 0.05;

      // Orbit rings & crystals rotation
      ring1.rotation.z = time * 0.2;
      ring2.rotation.z = -time * 0.15;
      baseMesh.rotation.z = time * 0.1;
      particles.rotation.y = time * 0.05;

      crystal1.position.x = Math.cos(time * 1.2) * 2.1;
      crystal1.position.z = Math.sin(time * 1.2) * 2.1;
      crystal1.position.y = Math.sin(time * 2.4) * 0.3;
      crystal1.rotation.x = time;
      crystal1.rotation.y = time * 1.5;

      crystal2.position.x = Math.cos(time * 1.0 + Math.PI) * 2.3;
      crystal2.position.z = Math.sin(time * 1.0 + Math.PI) * 2.3;
      crystal2.position.y = Math.cos(time * 1.8) * 0.4;
      crystal2.rotation.x = time * 1.2;
      crystal2.rotation.y = time;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMoveDoc);
      dom.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      dom.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      frontGeo.dispose();
      frontMat.dispose();
      boxGeo.dispose();
      boxMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      backGeo.dispose();
      backMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      crystalGeo.dispose();
      crystalMat1.dispose();
      crystalMat2.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient background glow behind 3D canvas */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-teal-500/15 rounded-3xl blur-3xl pointer-events-none" />

      {/* Cyber HUD Frame Brackets */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-sky-400/70 pointer-events-none z-10" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-sky-400/70 pointer-events-none z-10" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-sky-400/70 pointer-events-none z-10" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-sky-400/70 pointer-events-none z-10" />

      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[440px] sm:min-h-[480px] cursor-grab active:cursor-grabbing flex items-center justify-center relative z-0"
        title="Interactive 3D Cartoon Avatar"
      />
    </div>
  );
};

export default Cartoon3DAvatar;
