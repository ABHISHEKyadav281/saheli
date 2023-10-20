import React from 'react';

export default function Morefeatures() {
  const featureData1 = [
    'Calendar',
    'Reminders',
    'Diary',]
    const featureData2 = [ 
    'History',
    'Share',
    'Career Guidance',
  ];

  return (
    <div style={{ height: "70vh" }}>
      <h2 style={{ paddingLeft: "5vw" }}>More Features</h2>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8vw", padding: '5vmin' }}>
        {featureData1.map((feature, index) => (
          <div key={index} style={{ width: "15vw", height: "20vh", backgroundColor: "gray", borderRadius: '20px', display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8vw", padding: '5vmin' }}>
        {featureData2.map((feature, index) => (
          <div key={index} style={{ width: "15vw", height: "20vh", backgroundColor: "gray", borderRadius: '20px', display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
