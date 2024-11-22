import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { frame, animate } from "framer-motion";

export const ThreeJSComponent = () => {
  const canvasRef = useRef(null); // Ref for the container

  useEffect(() => {
    const main = canvasRef.current;

    // Ensure the container has a size
    if (!main) return;

    // Create the scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      main.offsetWidth / main.offsetHeight,
      0.1,
      1000
    );

    // Create the WebGL renderer and attach it to the DOM
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(main.offsetWidth, main.offsetHeight);
    main.appendChild(renderer.domElement);

    // Set a background color (optional)
    renderer.setClearColor(0xffffff, 0); // Transparent background

    // Create the star shape (2D) and then extrude it to 3D
    const createStarShape = () => {
      const outerRadius = 1; // Outer radius of the star
      const innerRadius = 0.4; // Inner radius of the star
      const points = 5; // Number of points of the star
      const shape = new THREE.Shape();

      const angleStep = Math.PI / points;

      for (let i = 0; i < 2 * points; i++) {
        const angle = angleStep * i;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        if (i === 0) {
          shape.moveTo(x, y);
        } else {
          shape.lineTo(x, y);
        }
      }

      shape.closePath(); // Close the shape
      return shape;
    };

    // Create the geometry from the star shape and extrude it
    const geometry = new THREE.ExtrudeGeometry(createStarShape(), {
      depth: 0.5, // The extrusion depth (how thick the star is)
      bevelEnabled: true, // Optionally enable bevel for rounded edges
      bevelSegments: 10, // Number of bevel segments
      steps: 1, // How many times the shape is extruded
      bevelSize: 0.1, // Size of the bevel
      bevelThickness: 0.1, // Thickness of the bevel
    });

    // Material for the star
    const material = new THREE.MeshPhongMaterial({ color: 0x4FC3F7 });
    const star = new THREE.Mesh(geometry, material);
    scene.add(star);

    // Set up lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 2);
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Set camera position
    camera.position.z = 5;

    // Animate the scene
    const animateFrame = () => {
      renderer.render(scene, camera);
      frame.render(animateFrame, true); // Continuously render the scene
    };
    frame.render(animateFrame, true);

    // Set up the star rotation animation using Framer Motion's animate
    animate(
      star.rotation,
      { y: Math.PI * 2, z: Math.PI * 2 }, // Rotate the star 360 degrees
      { duration: 7, repeat: Infinity, ease: "easeInOut" }
    );

    // Resize handling for responsive canvas
    const handleResize = () => {
      renderer.setSize(main.offsetWidth, main.offsetHeight);
      camera.aspect = main.offsetWidth / main.offsetHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{ width: "100%", height: "300px", backgroundColor: "whitesmoke" }}
    >
      {/* Three.js canvas will be appended here */}
    </div>
  );
};

