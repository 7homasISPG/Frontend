import React from 'react';
import Globe from 'react-globe.gl';

const AIGlobe = () => {
    // Generate some random data for arcs (connections)
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [['#ffffff20', '#ffffff80'][Math.round(Math.random() * 1)], ['#ffffff20', '#ffffff80'][Math.round(Math.random() * 1)]]
    }));

    return (
        <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            
            // Arcs configuration
            arcsData={arcsData}
            arcColor={'color'}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
            
            // Styling and interaction
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
};

export default AIGlobe;