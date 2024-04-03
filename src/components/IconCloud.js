import React from "react";
import allIcons from 'simple-icons';
import { v4 } from "uuid";
import { IconCloud } from 'react-icon-cloud';
import odoo  from '../assets/svg/odoo.svg'
const Componente = () => {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  }
  
  const iconSlugs = [
    "javascript",
    "python",
    "react",
    "django",
    "html5",
    "css3",
    "sass",
    // "testinglibrary",
    // "jest",
    // "docker",
    // "odoo17",
    "tensorflow",
    "keras",
    "git",
    "github",
    "visualstudiocode",
    // "redux",
    // "mysql",
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug)
  }));

  console.log(iconTags)
  // iconTags.push({
  //   id: 'odoo',
  //   simpleIcon: odoo
  // })
  return (
    <div className="iconCloud-container">
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={45}
        backgroundHexColor={"#fff"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default Componente;
